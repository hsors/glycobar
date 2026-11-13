<?php
// Receives the "Contact" dialog of the site and mails it to contact@glycobar.com.
// Runs on the OVH web hosting (PHP + mail()); it answers with a small JSON body.

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

const CONTACT_TO = 'contact@glycobar.com';

function reply($status, $ok, $error = null)
{
    http_response_code($status);
    echo json_encode($ok ? array('ok' => true) : array('ok' => false, 'error' => $error));
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    reply(405, false, 'Method not allowed.');
}

// Honeypot: a person never sees this field. Pretend it worked so bots move on.
if (!empty($_POST['website'])) {
    reply(200, true);
}

// A header value must stay on one line, or a visitor could inject extra headers.
function one_line($value)
{
    return trim(preg_replace('/[\r\n\t]+/', ' ', (string) $value));
}

$name = one_line($_POST['name'] ?? '');
$email = one_line($_POST['email'] ?? '');
$message = trim((string) ($_POST['message'] ?? ''));

if ($name === '' || mb_strlen($name) > 100) {
    reply(422, false, 'Please enter your name.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 150) {
    reply(422, false, 'Please enter a valid email address.');
}
if (mb_strlen($message) < 5 || mb_strlen($message) > 5000) {
    reply(422, false, 'Please write a message (5 to 5000 characters).');
}

// One message per visitor every 30 seconds.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$stamp = rtrim(sys_get_temp_dir(), '/') . '/glycobar_contact_' . md5($ip);
if (is_file($stamp) && time() - (int) filemtime($stamp) < 30) {
    reply(429, false, 'Please wait a moment before sending another message.');
}
@touch($stamp);

// The sender must belong to the site's own domain (glycobar.com, or the test
// domain), or the hosting refuses the mail. The visitor goes in Reply-To.
$host = strtolower(preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? 'glycobar.com'));
$host = preg_replace('/^(www|test)\./', '', $host);
if (!preg_match('/^[a-z0-9.-]+$/', $host)) {
    $host = 'glycobar.com';
}

$subject = '=?UTF-8?B?' . base64_encode('[Website] Message from ' . $name) . '?=';
$body = "Name: $name\r\nEmail: $email\r\n\r\n$message\r\n";
$headers = implode("\r\n", array(
    'From: GlycoBAR website <website@' . $host . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
));

if (!mail(CONTACT_TO, $subject, $body, $headers)) {
    reply(500, false, 'The message could not be sent.');
}

reply(200, true);

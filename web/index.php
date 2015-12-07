<?php
/**
 * @author  Ethan Hann <ethanhann@gmail.com>
 * @license For the full copyright and license information, please view the LICENSE
 *          file that was distributed with this source code.
 */

$loader = require_once __DIR__ . '/../vendor/autoload.php';

(new \Eeh\Fizzy\App('../config.json', $loader))
    ->configure()
    ->run();

 <?php
/**
 * Template Name: Test Page
 * Description: A Page Template with a darker design.
 */

// Code to display Page goes here...

 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */
<?php

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
Timber::render( array( 'page-' . $post->post_name . '.twig', 'test.twig' ), $context );
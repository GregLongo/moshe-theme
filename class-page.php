 <?php
/**
 * Template Name: Class Page
 * Description: Listing Page for a Class
 */


$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
Timber::render( 'class-page.twig' , $context );

<?php
/**
 * Template part for displaying an enhanced post navigation.
 *
 * @package Tailwind
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Begin post navigation.
$prev_post = get_previous_post();
$next_post = get_next_post();

// Allow themes and plugins to filter the display of the navigation.
if ( ! apply_filters( 'tailwind_display_post_navigation', true ) ) {
	return;
}

// Customizable parts of the navigation.
$prev_text = apply_filters( 'tailwind_prev_post_text', esc_html__( 'Previous Post', 'tailwind' ) );
$next_text = apply_filters( 'tailwind_next_post_text', esc_html__( 'Next Post', 'tailwind' ) );

// Display the navigation.
if ( $prev_post || $next_post ) : ?>

    <nav class="post-navigation col-span-10 col-start-2 md:col-span-8 md:col-start-3 font-bold" aria-label="<?php esc_attr_e( 'Post Navigation', 'tailwind' ); ?>">
        <div class="nav-links">
            <?php
            if ( $prev_post ) : ?>
                <div class="nav-previous">
                    <a href="<?php echo esc_url( get_permalink( $prev_post->ID ) ); ?>" rel="prev">
                        <?php echo $prev_text; ?>: <?php echo get_the_title( $prev_post->ID ); ?>
                    </a>
                </div>
            <?php endif;

            if ( $next_post ) : ?>
                <div class="nav-next">
                    <a href="<?php echo esc_url( get_permalink( $next_post->ID ) ); ?>" rel="next">
                        <?php echo $next_text; ?>: <?php echo get_the_title( $next_post->ID ); ?>
                    </a>
                </div>
            <?php endif; ?>
        </div>
    </nav>

<?php endif; ?>

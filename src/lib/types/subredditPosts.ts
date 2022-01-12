export interface RedditPost {
    all_awardings: Array<any>, // !!!
    allow_live_comments: boolean,
    approved_at_utc: number | null,
    approved_by: string | null,
    archived: boolean,
    author: string,
    author_flair_background_color: null | string,
    author_flair_css_class: null | string,
    author_flair_richtext: Array<any>, // !!!
    author_flair_template_id: string,
    author_flair_text: string,
    author_flair_text_color: string,
    author_flair_type: string,
    author_fullname: string,
    author_is_blocked: boolean,
    author_patreon_flair: boolean,
    author_premium: boolean,
    awarders: Array<any>, // !!!
    banned_at_utc: null | number,
    banned_by: null | string,
    can_gild: boolean,
    can_mod_post: boolean,
    category: null | string,
    clicked: boolean,
    content_categories: null | Array<any>, // !!!
    contest_mode: boolean,
    created: number,
    created_utc: number,
    discussion_type: null | string,
    distinguished: null | string,
    domain: string,
    downs: number,
    edited: boolean,
    gilded: boolean,
    gildings: any, // !!!
    hidden: boolean,
    hide_score: boolean,
    id: string,
    is_created_from_ads_ui: boolean,
    is_crosspostable: boolean,
    is_meta: boolean,
    is_original_content: boolean,
    is_reddit_media_domain: boolean,
    is_robot_indexable: boolean,
    is_self: boolean,
    is_video: boolean,
    likes: null | any, // !!!
    link_flair_background_color: string,
    link_flair_css_class: null | string,
    link_flair_richtext: Array<any>, // !!!
    link_flair_text: null | string,
    link_flair_text_color: string,
    link_flair_type: string,
    locked: boolean,
    media: null | any, // !!!
    media_embed: any, // !!!
    media_only: boolean,
    mod_note: null | string,
    mod_reason_by: null | string,
    mod_reason_title: null | string,
    mod_reports: Array<any>, // !!!
    name: string,
    no_follow: boolean,
    num_comments: number,
    num_crossposts: number,
    num_reports: null | number,
    over_18: boolean,
    parent_whitelist_status: string,
    permalink: string,
    pinned: boolean,
    post_hint: string,
    preview: {
        enabled: boolean,
        images: Array<{
            id: string,
            resolutions: Array<ImageSource>,
            source: ImageSource,
            variants: any
        }>
    },
    pwls: number,
    quarantine: boolean,
    removal_reason: null | string,
    removed_by: null | string,
    removed_by_cateogry: null | any, // !!!
    report_reasons: null | any, // !!!
    saved: boolean,
    score: number,
    secure_media: null | any, // !!!
    secure_media_embed: any, // !!!
    selftext: null | string,
    selftext_html: null | string,
    send_replies: boolean,
    spoiler: boolean,
    stickied: boolean,
    subreddit: string,
    subreddit_id: string,
    subreddit_name_prefixed: string,
    subreddit_subscribers: number,
    subreddit_type: string,
    suggested_sort: null | string,
    thumbnail: string,
    thumbnail_height: number,
    thumbnail_width: number,
    title: string,
    top_awarded_types: null | any, // !!!
    total_awards_recieved: number,
    treatment_tags: Array<any>, // !!!
    ups: number,
    upvote_ratio: number,
    url: string,
    user_reports: Array<any>,
    view_count: null | number,
    visited: boolean,
    whitelist_status: string,
    wls: number,
}

interface ImageSource {
    height: number,
    url: string,
    width: number,
}
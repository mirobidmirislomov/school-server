create table posts(
    post_id serial not null primary key,
    post_title varchar(128) not null,
    post_text varchar(640) not null,
    post_img text not null,
    post_created_at timestamptz DEFAULT CURRENT_TIMESTAMP
);
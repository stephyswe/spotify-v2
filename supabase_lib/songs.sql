create table
  public.songs (
    id bigint generated by default as identity not null,
    created_at timestamp with time zone null default now(),
    title text null,
    song_path text null,
    image_path text null,
    author text null,
    user_id uuid null,
    constraint songs_pkey primary key (id),
    constraint songs_user_id_fkey foreign key (user_id) references users (id) on delete cascade
  ) tablespace pg_default;
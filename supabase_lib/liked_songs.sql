create table
  public.liked_songs (
    user_id uuid not null,
    created_at timestamp with time zone null default now(),
    song_id bigint not null,
    constraint liked_songs_pkey primary key (user_id, song_id),
    constraint liked_songs_song_id_fkey foreign key (song_id) references songs (id) on delete cascade,
    constraint liked_songs_user_id_fkey foreign key (user_id) references users (id) on delete cascade
  ) tablespace pg_default;
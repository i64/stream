# Defly's socket data reference

## Client

### joining to a game

PREFIX : 01
- buffer_size = 2 + 2 * username.length + 1 + 2 * session.length + 4 + 4
- data:
    - buffer.append(write_string(username))
    - buffer.append(write_string(session))
    - buffer.append(skin_id)
    - buffer.append(played_gamed)
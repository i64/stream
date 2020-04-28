# Defly's socket data reference

## Client

### joining to a game

MAGIC: 01
- buffer_size = 2 + 2 * username.length + 1 + 2 * session.length + 4 + 4
- as_structs:
    username: str
    session: str
    skin_id: int:i32
    played_game: int:i32
- data:
    serialize(__super_struct__)

MAGIC: 02
- as_structs
    - input:
        shooting: bool
        moving: bool
        misc_flag: bool
        move_direction: f32
        aimDirection: f32
        ping: int: u16
        aim_direction: f32
    ping: int:i16
- buffer_size = 20
- data:
    input.shooting?1 + input.moving?2 + misc_flag?4
    input.move_direction
    input.aim_direction
    __super__.ping


        
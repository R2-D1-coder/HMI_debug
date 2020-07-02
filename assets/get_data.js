import { readFileSync } from 'fs';

const fileUrl = new URL('file:///D:/debug/software/cleanbot_visualizer_release_mingw64/online_log/online_P7Log_String_20200701-160113.txt');

readFileSync(fileUrl);
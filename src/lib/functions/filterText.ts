export function replaceAngleBrackets(text: string) {
    return text.replace(/&lt;/g, '<',).replace(/&gt;/g, '>');
}
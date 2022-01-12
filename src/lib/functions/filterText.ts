export function replaceAngleBrackets(text: string): string {
    return text.replace(/&lt;/g, '<',).replace(/&gt;/g, '>');
}
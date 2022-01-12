

export default function sanitizeData(data) {
    return data.data.children.map((post) => post.data);
}
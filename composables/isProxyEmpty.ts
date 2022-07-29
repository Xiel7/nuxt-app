export default function (value : typeof Proxy) {
    return Object.keys(value).length == 0;
}
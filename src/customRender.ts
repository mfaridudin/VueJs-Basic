// src/customRender.ts
import { createApp } from "./js/renderer.js";
import App from "./AdvancedAPIs/RenderCustom.js";

const container = {
    type: 'container',
    children: []
};

createApp(App).mount(container);

function printNode(node: any, indent: number = 0): string {
    const pad = '  '.repeat(indent);
    if (!node || typeof node !== 'object') return `${pad}${node}`;

    const tag = node.type ?? 'unknown';
    const value = node.props?.value !== undefined ? ` [value=${node.props.value}]` : '';
    const text = node.children && typeof node.children === 'string'
        ? ` "${node.children}"`
        : '';

    let result = `${pad}<${tag}${value}${text}>`;

    if (Array.isArray(node.children)) {
        result += '\n';
        for (const child of node.children) {
            result += printNode(child, indent + 1) + '\n';
        }
        result += `${pad}</${tag}>`;
    }

    return result;
}

setInterval(() => {
    console.clear();
    console.log('════════════════   HASIL RENDER CUSTOM    ════════════════');
    console.log(printNode(container));
    console.log(`Updated: ${new Date().toLocaleTimeString()}`);
}, 1000);
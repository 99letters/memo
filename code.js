"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Figma用のコード
if (figma.editorType === 'figma') {
    figma.showUI(__html__, { width: 350, height: 300 }); // 縦幅を400ピクセルに設定
    figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
        if (msg.type === 'create-text') {
            // フォントを先に読み込む
            yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
            // テキストノードを作成しデザインボードに追加
            const textNode = figma.createText();
            textNode.characters = msg.text;
            textNode.x = 100;
            textNode.y = 100;
            figma.currentPage.appendChild(textNode);
            figma.viewport.scrollAndZoomIntoView([textNode]);
        }
        figma.ui.postMessage(42);
    });
}
// FigJam用のコード
if (figma.editorType === 'figjam') {
    // FigJamのUIを表示する
    figma.showUI(__html__, { width: 350, height: 300 }); // 縦幅を400ピクセルに設定
    // UIからのメッセージを受け取るイベントハンドラ
    figma.ui.onmessage = msg => {
        // 'create-text' メッセージを受け取った場合の処理
        if (msg.type === 'create-text') {
            // テキストノードを作成しデザインボードに追加
            const textNode = figma.createText();
            textNode.characters = msg.text;
            textNode.x = 100; // 配置するX座標
            textNode.y = 100; // 配置するY座標
            figma.currentPage.appendChild(textNode);
            figma.viewport.scrollAndZoomIntoView([textNode]);
        }
        // UIにメッセージ（数値42）を送信
        figma.ui.postMessage(42);
    };
}
;

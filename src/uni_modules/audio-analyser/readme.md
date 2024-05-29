# audio-visualization

音频可视化组件是一款简易的浏览器音频可视化工具。它可以帮助你将音频数据以直观的视觉形式表达出来，为你的web项目增添趣味性和互动性。

## 功能

* 实时的音频可视化
* 支持可视化效果：波形、频谱等
* 易于定制，提供 API 和配置项定制效果

## 安装
您可以在uni-app插件市场通过uni_modules的形式进行安装，此安装方式可以方便您后续在uni_modules进行一键升级

## 使用
简单使用示例：
```vue
<script setup>
    const audio = new Audio("your audio url");
    audio.crossOrigin = "anonymous";
</script>

<template>
    <AudioAnalyser
        :audio="audio"
        :width="400"
        :height="200"
    ></AudioAnalyser>
</template>
```

定制效果示例：
```vue
<script setup lang="ts">
    const audio = new Audio("your audio url");
    audio.crossOrigin = "anonymous";

    function customTheme(ctx: CanvasRenderingContext2D, analyze: Uint8Array) {
        const width = ctx.canvas.width;
        const height = ctx.canvas.height;
        const length = analyze.length;

        let barHeight = 0;
        const barWidth = width / length * 1.5;

        for (let i = 0, x = 0; i < length; i++) {
            barHeight = analyze[i];

            const r = barHeight + 25 * (i / length);
            const g = 250 * (i / length);
            const b = 50;

            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.fillRect(x, height - barHeight, barWidth, barHeight);

            x += barWidth + 1;
        }
    }
</script>

<template>
    <AudioAnalyser
        :audio="audio"
        :width="400"
        :height="200"
        :is-custom="true"
        :custom-theme="customTheme"
    ></AudioAnalyser>
</template>
```

## Props
| Prop name   | Type                                                         | Default value | Description                                      |
|-------------|--------------------------------------------------------------|---------------|--------------------------------------------------|
| audio       | HTMLAudioElement                                             |               | audio元素                                          |
| width       | number                                                       |               | 画布宽度（单位：rpx）                                     |
| height      | number                                                       |               | 画布高度（单位：rpx）                                     |
| theme       | "line"                                                       | "line"        | 主题                                               |
| fftSize     | number                                                       | 512           | fftSize要求是2的幂次方，如 256 、 512 等。数字越大越精细，但会同时会影响性能。 |
| isCustom    | boolean                                                      | false         | 定制效果                                             |
| customTheme | (ctx: CanvasRenderingContext2D, analyze: Uint8Array) => void |               | 定制效果方法                                           |

### 联系和支持
如有任何疑问或反馈，欢迎创建 GitHub issues 或联系我们（您的联系邮箱）。

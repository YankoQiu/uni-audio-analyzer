function lineTheme(ctx: CanvasRenderingContext2D, analyze: Uint8Array) {
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

export { lineTheme };

function changeBackgroundColor() {
    const colors = ['#f06e95', '#b86dae', '#eaafc8', '#ffafda', '#fffff'];
    document.body.style.background = `linear-gradient(135deg, ${colors[Math.floor(Math.random() * colors.length)]}, ${colors[Math.floor(Math.random() * colors.length)]}, ${colors[Math.floor(Math.random() * colors.length)]})`;
}
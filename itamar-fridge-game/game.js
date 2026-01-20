const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game state
let gameRunning = false;
let score = 0;
let distance = 0;
let lives = 3;
let gameSpeed = 5;
let obstacleTimer = 0;
let distanceTimer = 0;

// Player image
const playerImage = new Image();
playerImage.src = 'itamar.png'; // Will use Itamar's photo!
let imageLoaded = false;
playerImage.onload = () => {
    imageLoaded = true;
};

// Player
const player = {
    x: 100,
    y: canvas.height - 120,
    width: 50,
    height: 70,
    velocityY: 0,
    jumping: false,
    gravity: 0.8,
    jumpPower: -15,
    groundY: canvas.height - 120
};

// Arrays
let obstacles = [];
let clouds = [];
let particles = [];

// Initialize clouds
function initClouds() {
    clouds = [];
    for (let i = 0; i < 5; i++) {
        clouds.push({
            x: Math.random() * canvas.width,
            y: Math.random() * 150 + 20,
            width: Math.random() * 60 + 40,
            speed: Math.random() * 0.5 + 0.2
        });
    }
}

// Draw cloud
function drawCloud(cloud) {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.arc(cloud.x, cloud.y, cloud.width * 0.3, 0, Math.PI * 2);
    ctx.arc(cloud.x + cloud.width * 0.3, cloud.y, cloud.width * 0.4, 0, Math.PI * 2);
    ctx.arc(cloud.x + cloud.width * 0.6, cloud.y, cloud.width * 0.3, 0, Math.PI * 2);
    ctx.fill();
}

// Update clouds
function updateClouds() {
    clouds.forEach(cloud => {
        cloud.x -= cloud.speed;
        if (cloud.x + cloud.width < 0) {
            cloud.x = canvas.width + cloud.width;
            cloud.y = Math.random() * 150 + 20;
        }
    });
}

// Draw player (using Itamar's image!)
function drawPlayer() {
    if (imageLoaded) {
        // Draw Itamar's image
        ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
    } else {
        // Fallback: simple stick figure while image loads
        const headRadius = 15;
        const headX = player.x + player.width / 2;
        const headY = player.y + headRadius;

        // Head
        ctx.fillStyle = '#FFD1A4';
        ctx.beginPath();
        ctx.arc(headX, headY, headRadius, 0, Math.PI * 2);
        ctx.fill();

        // Body
        ctx.strokeStyle = '#5B9BD5';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(headX, headY + headRadius);
        ctx.lineTo(headX, player.y + player.height - 15);
        ctx.stroke();
    }
}

// Draw obstacle
function drawObstacle(obstacle) {
    if (obstacle.type === 'box') {
        // Draw box obstacle
        ctx.fillStyle = '#D2691E';
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 3;
        ctx.strokeRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

        // Add some detail lines
        ctx.strokeStyle = '#A0522D';
        ctx.beginPath();
        ctx.moveTo(obstacle.x + obstacle.width / 2, obstacle.y);
        ctx.lineTo(obstacle.x + obstacle.width / 2, obstacle.y + obstacle.height);
        ctx.stroke();
    } else if (obstacle.type === 'spike') {
        // Draw spike obstacle
        ctx.fillStyle = '#FF4444';
        ctx.beginPath();
        for (let i = 0; i < 3; i++) {
            const x = obstacle.x + (i * obstacle.width / 3);
            ctx.moveTo(x, obstacle.y + obstacle.height);
            ctx.lineTo(x + obstacle.width / 6, obstacle.y);
            ctx.lineTo(x + obstacle.width / 3, obstacle.y + obstacle.height);
        }
        ctx.fill();
        ctx.strokeStyle = '#CC0000';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

// Draw fridge at the end
function drawFridge(x) {
    const fridgeWidth = 80;
    const fridgeHeight = 120;
    const y = canvas.height - 70 - fridgeHeight;

    // Fridge body
    ctx.fillStyle = '#F5F5DC';
    ctx.fillRect(x, y, fridgeWidth, fridgeHeight);

    // Fridge outline
    ctx.strokeStyle = '#999';
    ctx.lineWidth = 3;
    ctx.strokeRect(x, y, fridgeWidth, fridgeHeight);

    // Orange stripe
    ctx.fillStyle = '#FF8C00';
    ctx.fillRect(x, y + fridgeHeight / 2 - 5, fridgeWidth, 10);

    // Top door
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 2;
    ctx.strokeRect(x + 5, y + 5, fridgeWidth - 10, fridgeHeight / 2 - 15);

    // Bottom door
    ctx.strokeRect(x + 5, y + fridgeHeight / 2 + 10, fridgeWidth - 10, fridgeHeight / 2 - 15);

    // Handles
    ctx.fillStyle = '#333';
    ctx.fillRect(x + 10, y + fridgeHeight / 4, 15, 4);
    ctx.fillRect(x + 10, y + fridgeHeight * 3 / 4, 15, 4);

    // Draw "FINISH!" text
    ctx.fillStyle = '#FF1493';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('FRIDGE!', x + fridgeWidth / 2, y - 10);
}

// Create obstacle
function createObstacle() {
    const types = ['box', 'spike', 'box', 'spike'];
    const type = types[Math.floor(Math.random() * types.length)];

    let obstacle;
    if (type === 'box') {
        const height = Math.random() * 40 + 40;
        obstacle = {
            x: canvas.width,
            y: canvas.height - 70 - height,
            width: 40,
            height: height,
            type: 'box'
        };
    } else {
        obstacle = {
            x: canvas.width,
            y: canvas.height - 70 - 40,
            width: 60,
            height: 40,
            type: 'spike'
        };
    }

    obstacles.push(obstacle);
}

// Create particle effect
function createParticles(x, y, color) {
    for (let i = 0; i < 10; i++) {
        particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 6,
            vy: (Math.random() - 0.5) * 6,
            life: 30,
            color: color
        });
    }
}

// Update particles
function updateParticles() {
    particles = particles.filter(p => p.life > 0);
    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.2;
        p.life--;
    });
}

// Draw particles
function drawParticles() {
    particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life / 30;
        ctx.fillRect(p.x, p.y, 4, 4);
        ctx.globalAlpha = 1;
    });
}

// Jump
function jump() {
    if (!player.jumping && gameRunning) {
        player.velocityY = player.jumpPower;
        player.jumping = true;
    }
}

// Collision detection
function checkCollision(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y;
}

// Update game
function update() {
    if (!gameRunning) return;

    // Update player physics
    player.velocityY += player.gravity;
    player.y += player.velocityY;

    if (player.y >= player.groundY) {
        player.y = player.groundY;
        player.velocityY = 0;
        player.jumping = false;
    }

    // Update distance
    distanceTimer++;
    if (distanceTimer >= 10) {
        distance++;
        distanceTimer = 0;
        document.getElementById('distance').textContent = distance;
    }

    // Create obstacles
    obstacleTimer++;
    if (obstacleTimer > 100 - gameSpeed * 5) {
        createObstacle();
        obstacleTimer = 0;
    }

    // Update obstacles
    obstacles.forEach((obstacle, index) => {
        obstacle.x -= gameSpeed;

        // Check collision
        if (checkCollision(player, obstacle)) {
            lives--;
            document.getElementById('lives').textContent = lives;
            createParticles(obstacle.x + obstacle.width / 2, obstacle.y + obstacle.height / 2, '#FF4444');
            obstacles.splice(index, 1);

            if (lives <= 0) {
                endGame(false);
            }
        }

        // Score for passing obstacle
        if (obstacle.x + obstacle.width < player.x && !obstacle.passed) {
            obstacle.passed = true;
            score += 13; // Points in multiples of 13!
            document.getElementById('score').textContent = score;
            createParticles(obstacle.x + obstacle.width / 2, obstacle.y + obstacle.height / 2, '#FFD700');
        }

        // Remove off-screen obstacles
        if (obstacle.x + obstacle.width < 0) {
            obstacles.splice(index, 1);
        }
    });

    // Update clouds
    updateClouds();

    // Update particles
    updateParticles();

    // Check if reached fridge (win condition)
    if (distance >= 260) {
        endGame(true);
    }

    // Increase difficulty
    if (distance % 50 === 0 && distance > 0 && distanceTimer === 0) {
        gameSpeed = Math.min(gameSpeed + 0.2, 10);
    }
}

// Draw game
function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, canvas.width, canvas.height * 0.7);

    // Draw ground
    ctx.fillStyle = '#90EE90';
    ctx.fillRect(0, canvas.height * 0.7, canvas.width, canvas.height * 0.3);

    // Draw grass detail
    ctx.fillStyle = '#228B22';
    for (let i = 0; i < canvas.width; i += 20) {
        ctx.fillRect(i, canvas.height * 0.7, 2, 10);
    }

    // Draw ground line
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height - 70);
    ctx.lineTo(canvas.width, canvas.height - 70);
    ctx.stroke();

    // Draw clouds
    clouds.forEach(drawCloud);

    // Draw fridge if close to end
    if (distance >= 240) {
        const fridgeX = canvas.width - (260 - distance) * 50;
        drawFridge(fridgeX);
    }

    // Draw obstacles
    obstacles.forEach(drawObstacle);

    // Draw particles
    drawParticles();

    // Draw player
    drawPlayer();
}

// Game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Start game
function startGame() {
    document.getElementById('startScreen').classList.add('hidden');
    gameRunning = true;
    score = 0;
    distance = 0;
    lives = 3;
    gameSpeed = 5;
    obstacles = [];
    particles = [];
    player.y = player.groundY;
    player.velocityY = 0;
    player.jumping = false;
    document.getElementById('score').textContent = score;
    document.getElementById('distance').textContent = distance;
    document.getElementById('lives').textContent = lives;
}

// End game
function endGame(won) {
    gameRunning = false;
    const gameOverScreen = document.getElementById('gameOverScreen');
    const gameOverTitle = document.getElementById('gameOverTitle');
    const finalScore = document.getElementById('finalScore');
    const finalDistance = document.getElementById('finalDistance');

    if (won) {
        gameOverTitle.textContent = '🎉 ITAMAR REACHED THE FRIDGE! 🎉';
        gameOverTitle.style.color = '#4CAF50';
        finalScore.textContent = `Amazing! Score: ${score} points!`;
    } else {
        gameOverTitle.textContent = '😅 So Close!';
        gameOverTitle.style.color = '#FF6B6B';
        finalScore.textContent = `Score: ${score} points`;
    }

    finalDistance.textContent = `Distance traveled: ${distance} meters`;
    gameOverScreen.classList.remove('hidden');
}

// Restart game
function restartGame() {
    document.getElementById('gameOverScreen').classList.add('hidden');
    startGame();
}

// Event listeners
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        jump();
    }
});

document.addEventListener('keyup', (e) => {
    if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
    }
});

// Mobile support
canvas.addEventListener('click', jump);
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    jump();
});

// Initialize
initClouds();
gameLoop();

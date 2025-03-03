document.addEventListener('DOMContentLoaded', () => {
    const weeklyData = {
        labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
        datasets: [{
            label: 'Su Tüketimi (ml)',
            data: [1800, 2100, 1950, 2000, 1700, 2200, 1900],
            backgroundColor: 'rgba(5, 130, 202, 0.2)',
            borderColor: '#0582ca',
            borderWidth: 2,
            tension: 0.4
        }]
    };

    new Chart(document.getElementById('weeklyChart'), {
        type: 'line',
        data: weeklyData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Miktar (ml)'
                    }
                }
            }
        }
    });

    const dailyTargetData = {
        labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
        datasets: [{
            label: 'Gerçekleşen',
            data: [1800, 2100, 1950, 2000, 1700, 2200, 1900],
            backgroundColor: 'rgba(5, 130, 202, 0.5)',
        },
        {
            label: 'Hedef',
            data: [2000, 2000, 2000, 2000, 2000, 2000, 2000],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }]
    };

    new Chart(document.getElementById('dailyTargetChart'), {
        type: 'bar',
        data: dailyTargetData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const monthlyData = {
        labels: Array.from({length: 30}, (_, i) => i + 1),
        datasets: [{
            label: 'Su Tüketimi (ml)',
            data: Array.from({length: 30}, () => Math.floor(Math.random() * (2500 - 1500) + 1500)),
            backgroundColor: 'rgba(5, 130, 202, 0.2)',
            borderColor: '#0582ca',
            borderWidth: 2,
            tension: 0.4
        }]
    };

    new Chart(document.getElementById('monthlyTrendChart'), {
        type: 'line',
        data: monthlyData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    updateStatCards();
});

function updateStatCards() {
    document.getElementById('dailyAverage').textContent = '1950 ml';
    document.getElementById('monthlyTotal').textContent = '58.5 L';
    document.getElementById('targetSuccess').textContent = '85%';
}
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


const questions = [
  {
    question: 'Berapakah 2 + 2?',
    answers: [
        { text: '6', correct: false },
      { text: '2', correct: false },
      { text: '4', correct: true },
      { text: '5', correct: false }
    ]
  },
  {
    question: 'Berapakah 3 + 2?',
    answers: [
      { text: '5', correct: true },
      { text: '6', correct: false },
      { text: '7', correct: false },
      { text: '4', correct: false }
    ]
  },
  {
    question: 'Berapakah 7 - 5?',
    answers: [
      { text: '4', correct: false },
      { text: '2', correct: true },
      { text: '1', correct: false },
      { text: '10', correct: false }
    ]
  },
  {
    question: 'Berapakah 1 - 1?',
    answers: [
      { text: '4', correct: false },
      { text: '0', correct: true },
      { text: '1', correct: false },
      { text: '2', correct: false }
    ]
},
{
  question: 'Berapakah 7 - 5?',
  answers: [
    { text: '4', correct: false },
    { text: '2', correct: true },
    { text: '1', correct: false },
    { text: '10', correct: false }
  ]
},
{
  question: 'Berapakah 8 + 2?',
  answers: [
    { text: '4', correct: false },
    { text: '2', correct: false },
    { text: '1', correct: false },
    { text: '10', correct: true }
  ]
},
{
  question: 'Joni memiliki tiga buah apel, lalu ia memakannya satu. berapakah sisa apel joni?',
  answers: [
    { text: '4', correct: false },
    { text: '2', correct: true },
    { text: '1', correct: false },
    { text: '7', correct: false }
  ]
},
{
  question: 'rafi membeli dua buah mangga lalu tiga hari kemudian ia membeli tiga jambu. berapakah jumlah mangga dan jambu rafi?',
  answers: [
    { text: '5', correct: true },
    { text: '3', correct: false },
    { text: '4', correct: false },
    { text: '6', correct: false }
  ]
},
{
  question: 'Yordan membeli sebuah mainan dengan duit 10 ribuan, tetapi harga mainan tersebut adalah 7 ribu. berapakah kembalian yang akan yordan dapat',
  answers: [
    { text: '4', correct: false },
    { text: '2', correct: false },
    { text: '3', correct: true },
    { text: '1', correct: false }
  ]
},
{
  question: 'berapakah hasil pengurangan dari 2 - 3 ?',
  answers: [
    { text: '0', correct: false },
    { text: '2', correct: false },
    { text: '-1', correct: true },
    { text: '-2', correct: false }
  ]
},
{
  question: 'berapakah perkalian dari 4 dengan 2',
  answers: [
    { text: '12', correct: false },
    { text: '2', correct: false },
    { text: '4', correct: false },
    { text: '8', correct: true }
  ]
},
{
  question: '2 + 2 x 2 = ??',
  answers: [
    { text: '4', correct: false },
    { text: '8', correct: false },
    { text: '6', correct: true },
    { text: '10', correct: false }
  ]
},
{
  question: 'Harga sebuah mangga adalah 5 ribu, tetapi kamu hanya memiliki 3 ribu. kurang berapakah untuk membeli mangga?',
  answers: [
    { text: '4', correct: false },
    { text: '2', correct: true },
    { text: '1', correct: false },
    { text: '3', correct: false }
  ]
},
{
  question: 'berapakah hasil pembagian dari 10 : 2 = ??',
  answers: [
    { text: '5', correct: true },
    { text: '4', correct: false },
    { text: '20', correct: false },
    { text: '15', correct: false }
  ]
},
{
  question: '3 x 2 x 1 x 0 = ??',
  answers: [
    { text: '0', correct: true },
    { text: '1', correct: false },
    { text: '2', correct: false },
    { text: '3', correct: false }
  ]
},
{
  question: 'ibu guru pergi kepasar membeli 5 buah pisang lalu ibu guru memberikan 1 buah pisang keanak nya dan juga memakan satu buah lagi. berapakah sisa buah pisang yang tersisa ??',
  answers: [
    { text: '4', correct: false },
    { text: '2', correct: false },
    { text: '1', correct: false },
    { text: 'Semua jawaban salah', correct: true }
  ]
},
{
  question: 'Suhu udara di puncak gunung pada pukul 03.00 adalah -10° C. Setelah matahari terbit, energi matahari menaikkan suhu udara di puncak gunung tersebut. Jika setiap jam suhu udara di puncak guning naik 5° C, suhu udara pada pukul 15.00 menjadi C° ??',
  answers: [
    { text: '26', correct: true },
    { text: '24', correct: false },
    { text: '25', correct: false },
    { text: '27', correct: false }
  ]

},
{
  question: 'berapakah hasil dari 1+1x0 = ??',
  answers: [
    { text: '0', correct: false },
    { text: '1', correct: true },
    { text: '2', correct: false },
    { text: '3', correct: false }
  ]

},
{
  question: 'Bus Harapan Jaya berangkat dari terminal setiap 30 menit sekali. Bus Pelita Indah berangkat dari terminal setiap 45 menit sekali, dan bus Barokah berangkat setiap 60 menit sekali. Jika ketiga bus berangkat bersama-sama pada pukul 05.00, ketiga bus akan berangkat bersama- sama lagi pada pukul .... ??',
  answers: [
    { text: '10.00', correct: false },
    { text: '09.00', correct: false },
    { text: '08.00', correct: true },
    { text: '07.00', correct: false }
  ]

},
{
  question: 'Ibu memiliki dua taplak meja berbentuk persegi. Panjang sisi taplak pertama 120 cm. Panjang sisi taplak kedua 135 cm. Selisih luas kedua taplak tersebut adalah cm² ??',
  answers: [
    { text: '1256', correct: false },
    { text: '1001', correct: false },
    { text: '2541', correct: false },
    { text: '3825', correct: true }
  ]

},
{
  question: 'Herlina ingin membuat gelang. Ia membeli manik-manik warna merah 80 butir, hijau 75 butir, dan biru 50 butir. Herlina akan membuat gelang dari manik-manik tersebut dengan bagian warna yang sama. Banyaknya manik-manik pada setiap gelang adalah ??',
  answers: [
    { text: 'manik-manik merah 10, manik-manik hijau 15, manik-manik biru 10', correct: false },
    { text: 'manik-manik merah 20, manik-manik hijau 5, manik-manik biru 10', correct: false },
    { text: 'manik-manik merah 16, manik-manik hijau 15, manik-manik biru 10', correct: true },
    { text: 'salah semua', correct: false }
  ]

},
{
  question: 'Pak Anas memiliki pekarangan berbentuk persegi panjang. Panjang dan lebar pekarangan tersebut berturut-turut 85 m dan 55 m. Di sekeliling pekarangan akan ditanami pohon turi. Jarak antarpohon 5 meter. Banyaknya pohon turi di kebun Pak Anas sebanyak ??',
  answers: [
    { text: '125', correct: false },
    { text: '56', correct: true },
    { text: '25', correct: false },
    { text: '50', correct: false }
  ]

},
{
  question: 'KPK dari 85, 90, dan 125 dalam bentuk faktorisasi prima adalah ??',
  answers: [
    { text: '2 x 3² x 5³', correct: true },
    { text: '2 x 3 x 5²', correct: false },
    { text: '2 x 3² x 5²', correct: false },
    { text: 'salah semua', correct: false }
  ]

},
{
  question: 'berapakah hasil dari 100-75 = ??',
  answers: [
    { text: '125', correct: false },
    { text: '100', correct: false },
    { text: '25', correct: true },
    { text: '50', correct: false }
  ]

},
{
  question: 'Ada 5 kotak berbentuk kubus ditumpuk. 2 kotak berukuran besar, 3 kotak berukuran kecil. Volume kotak besar 1.728 cm dan kotak kecil 343 cm. Tinggi tumpukan kelima kotak tersebut adalah cm. = ??',
  answers: [
    { text: '40', correct: false },
    { text: '45', correct: true },
    { text: '41', correct: false },
    { text: '43', correct: false }
  ]

},
{
  question: 'berapakah hasil dari 100 : 10 = ??',
  answers: [
    { text: '125', correct: false },
    { text: '100', correct: false },
    { text: '25', correct: false },
    { text: '10', correct: true }
  ]

},
{
  question: 'Perbandingan uang Soni dan uang Fahri adalah 5 : 6. Jika jumlah uang mereka Rp 132.000,-, maka banyaknya uang Soni adalah ??',
  answers: [
    { text: 'Rp 50.000,00', correct: false },
    { text: 'Rp 70.000,00', correct: false },
    { text: 'Rp 60.000,00', correct: true },
    { text: 'Rp 40.000,00', correct: false }
  ]

},
{
  question: 'berapakah hasil dari 30-29 = ??',
  answers: [
    { text: '125', correct: false },
    { text: '1', correct: true },
    { text: '25', correct: false },
    { text: '50', correct: false }
  ]

},
{
  question: 'Budi sedang mengisi bak mandi. Ia menggunakan keran dengan debit 12 liter/menit. Jika ia membuka keran selama 2 jam, maka volume air di dalam bak mandi tersebut adalah ??',
  answers: [
    { text: '1440', correct: true },
    { text: '1000', correct: false },
    { text: '2500', correct: false },
    { text: '5000', correct: false }
  ]

},
{
  question: 'Pak Wisnu berangkat ke kantor mengendarai sepeda motor dengan kecepatan 40 km/jam. Lama perjalanan dari rumah ke kantor 45 menit. Jarak rumah Pak Wisnu ke kantor adalah ??',
  answers: [
    { text: '32', correct: false },
    { text: '30', correct: true },
    { text: '34', correct: false },
    { text: '36', correct: false }
  ]
  }
]

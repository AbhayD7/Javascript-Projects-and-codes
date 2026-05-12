const quote = document.querySelector('h1')
const button = document.querySelector('button')

const quotes = ["To thine own self be true — William Shakespeare", 
"If you want to be happy, be — Leo Tolstoy", 
"Be yourself,everyone else is already taken — Oscar Wilde", 
"The secret of getting ahead is getting started — Mark Twain", 
"There is no charm equal to tenderness of heart — Jane Austen", 
"In a time of deceit telling the truth is a revolutionary act — George Orwell",
"The world breaks everyone, and afterward, many are strong at the broken places — Ernest Hemingway",
  "The soul is healed by being with children — Fyodor Dostoevsky", 
  "No gate, no lock, no bolt can restrict the freedom of my mind — Virginia Woolf", 
  "It was the best of times, it was the worst of times — Charles Dickens", 
  "Let your life lightly dance on the edges of time — Rabindranath Tagore", 
  "Pain is inevitable.Suffering is optional — Haruki Murakami", 
  "When you want something, all the universe conspires to help you — Paulo Coelho", 
  "It is our choices that show what we truly are — J.K.Rowling", 
  "Out of suffering have emerged the strongest souls — Khalil Gibran", 
  "In the depth of winter, I found an invincible summer within me — Albert Camus",
  "A book must be the axe for the frozen sea within us — Franz Kafka", 
   "What you seek is seeking you — Rumi", 
   "A reader lives a thousand lives before he dies — George R.R.Martin", 
   "You are never too old to set another goal — C.S.Lewis"];

button.addEventListener('click',()=>{
let random = parseInt(Math.random() * 20);
quote.textContent=quotes[random]
})
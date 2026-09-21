# CV Maker

Foydalanuvchi o'zi haqidagi ma'lumotlarni bosqichma-bosqich forma orqali kiritib, tayyor rezyume (CV) hosil qiladigan va uni PDF holida yuklab oladigan Vue 3 SPA. Loyiha frontend-fokusli demo/pet-project sifatida qurilgan: UI, forma validatsiyasi, ko'p bosqichli flow va PDF eksport to'liq ishlaydi, backend esa hali ulanmagan (quyida "Hozirgi holat" bo'limida aniq yozilgan).

## Foydalanuvchi yo'li (user flow)

1. **Bosh sahifa (`/`)** — marketing/landing qismi: hero banner, "nega bizni tanlash kerak" ro'yxati, asosiy imkoniyatlar kartochkalari, mijozlar/portfolio uchun Swiper karuseli.
2. **Kirish / Ro'yxatdan o'tish** — header'dagi "Log in" tugmasi orqali modal ochiladi; bitta modal ichida Login va Registration formalari almashtiriladi (email/parol, ro'yxatdan o'tishda +998 prefiksli telefon raqami ham so'raladi, parolni ko'rsatish/yashirish tugmasi bor).
3. **Shaxsiy ma'lumotlar (`/complete-user`)** — ism, familiya, telefon, email, parol/parolni tasdiqlash, shahar, pochta indeksi, manzil va avatar rasmi kiritiladi.
4. **CV ma'lumotlarini to'ldirish (`/complete-data`)** — bir nechta akkordeon (accordion) blok orqali:
   - **Resume objective (Summary)** — rich-text muharrir (Quill) yordamida o'zi haqida qisqacha matn;
   - **Education and Qualifications** — bir nechta ta'lim yozuvini qo'shish/o'chirish/tahrirlash (muassasa, fakultet, lavozim, boshlanish/tugash sanasi, logotip, tavsif);
   - **Work experience** — bir nechta ish tajribasi yozuvi (kompaniya nomi, manzili, lavozim, sana oralig'i, logotip, tavsif);
   - **Your skills** — ko'nikmalar ro'yxati, har biri "hard" yoki "soft" turi bilan;
   - **Your languages** — tillar ro'yxati, har biri daraja (elementary → native) bilan;
   - **Your socials** — ijtimoiy tarmoq/havolalar ro'yxati (nomi, akkaunt, link, logotip).
   
   Har bir blok mustaqil: yozuvlarni istalgancha qo'shish, saqlangandan keyin "yopiq" holatga o'tkazib tahrirlash/o'chirish, va har bir qism o'z ichida VeeValidate orqali validatsiya qilinadi.
5. **Rezyume va yuklab olish (`/make-cv`)** — yakuniy CV ko'rinishi ekranga chiqariladi va "Download" tugmasi bosilganda `jsPDF` shu HTML bo'lakni PDF faylga aylantirib, brauzer orqali yuklab beradi.
6. **Shablonlar (`/templates`)** va **Aloqa (`/contact`)** — quyida "Hozirgi holat"da izohlangan.

Bundan tashqari, har bir forma blokida **"Show CV"** tugmasi bor — u modal oynada joriy CV'ning tez ko'rinishini (preview) ochadi.

## Hozirgi holat va cheklovlar

Bu — portfolio/pet-project bo'lgani uchun quyidagilarni aniq aytib o'tish muhim:

- **Backend yo'q.** Login/Registration va "Personal details" formalari `console.log` qiladi va `localStorage`ga shartli `access_token` yozadi — bu haqiqiy autentifikatsiya emas, faqat UI holatini (login/logout ko'rinishi) simulyatsiya qiladi.
- **Formalar hali bir-biriga bog'lanmagan.** `/make-cv` sahifasidagi va "Show CV" modalidagi rezyume matni hozircha statik namuna matn (`Mukhammadi Toshtemirov | Fullstack` va Lorem Ipsum) — oldingi bosqichlarda kiritilgan real ma'lumotlar hali yakuniy CV shabloniga uzatilmaydi. Bu — keyingi rivojlantirish bosqichi.
- **Shablonlar sahifasi** (`/templates`) — hozircha faqat 1 ta namunaviy CV dizayni bor, qolganlari "It will be added soon" belgisi bilan joy-tutuvchi (placeholder).
- **Aloqa sahifasi** (`/contact`) — hali ishlab chiqilmagan, "This feature will be added soon" xabarini ko'rsatadi.
- **`AuthLayout` va `AdminLayout`** — kelajakdagi rollar (masalan, admin panel) uchun bo'sh skelet sifatida tayyorlangan, lekin router'da hali ulanmagan (faqat `UserLayout` ishlatiladi).
- **Pinia** ulangan, lekin hozircha faqat Vite'ning standart namunaviy `counter` do'koni bor — CV ma'lumotlari uchun real store hali yozilmagan (formalar lokal `ref`larda saqlanadi).

## Texnologiyalar

- [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- [Vite](https://vitejs.dev/) — dasturlash va build vositasi
- [Vue Router](https://router.vuejs.org/) — sahifalar orasida navigatsiya
- [Pinia](https://pinia.vuejs.org/) — state management (hozircha minimal ishlatilgan)
- [VeeValidate](https://vee-validate.logaretm.com/) + [@vee-validate/rules](https://vee-validate.logaretm.com/v4/guide/global-validators/) — forma validatsiyasi va xato xabarlari (`required`, `min`, `email`, `digits`, `url`, `confirmed`, `image`, `one_of` va h.k.)
- [Tailwind CSS](https://tailwindcss.com/) — stillar
- [jsPDF](https://github.com/parallax/jsPDF) — tayyor CV'ni PDF formatida generatsiya qilish
- [Vue Quill](https://github.com/vueup/vue-quill) + `quill-blot-formatter` — rich-text muharrir (summary va tajriba tavsiflari uchun)
- [Swiper](https://swiperjs.com/) — bosh sahifadagi karusel
- [Boxicons](https://boxicons.com/) — ikonkalar

## Loyiha tuzilmasi

```
src/
  components/
    common/
      accordion/       # Accordion.vue — ochiladigan/yopiladigan bo'lim
      modal/            # AppModal.vue, AppModal-wh.vue — bazaviy modal (fade/scale animatsiya)
      ui/               # AppTransition.vue, QuillEditor.vue (Vue Quill wrapper)
      form/             # Input.vue — umumiy forma inputi
    users/
      main/             # Bosh sahifa bo'limlari: Header, Intro, About, Quality, Features, Inspiration, Footer
      complete/          # CV ma'lumotlari akkordeonlari: Intro (progress bar), Summary, Education, Experience, Skills, Language, Social
      partials/          # Har bir akkordeon ichidagi qo'shiladigan-o'chiriladigan forma elementlari (EducationForm, ExperienceForm, SkillForm, LanguageForm, SocialForm)
      modal/             # LoginModal.vue (login/registratsiya), ShowCvModal.vue (CV preview)
  composables/
    makePdf.js          # HTML elementni jsPDF orqali PDF faylga aylantirish
    veeValidate.js       # VeeValidate komponentlari va validatsiya qoidalarini global ro'yxatdan o'tkazish
  layouts/               # UserLayout (ishlatiladi), AuthLayout va AdminLayout (hozircha bo'sh skelet)
  views/users/            # HomeView, UserFormView, CompleteDataView, MakeCvView, TemplatesView, ContactView
  router/                 # Sahifalar marshrutlari (barchasi UserLayout ostida)
  stores/                 # Pinia do'konlari (hozircha namunaviy counter)
```

## O'rnatish va ishga tushirish

```sh
npm install
```

### Development rejimida ishga tushirish

```sh
npm run dev
```

### Production uchun build qilish

```sh
npm run build
```

### Build natijasini lokal ko'rish

```sh
npm run preview
```

## Deploy

Loyiha [Netlify](https://www.netlify.com/) orqali deploy qilishga moslashtirilgan (`netlify.toml` — SPA uchun barcha marshrutlarni `index.html`ga yo'naltiradi).

## Tavsiya etiladigan IDE sozlamasi

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) kengaytmasi (Vetur o'chirilgan holatda).

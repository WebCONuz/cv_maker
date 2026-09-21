# CV Maker

Foydalanuvchiga bosqichma-bosqich forma orqali ma'lumotlarini kiritish va shu asosda tayyor rezyume (CV) shablonini PDF holida yuklab olish imkonini beruvchi veb-ilova.

## Ilova nima qiladi

- **Bosh sahifa** — loyiha haqida umumiy ma'lumot, imkoniyatlar va ilhomlantiruvchi bo'limlar.
- **Ro'yxatdan o'tish / kirish** — modal oynalar orqali foydalanuvchi hisobga oid boshlang'ich ma'lumotlarni kiritadi.
- **Ma'lumotlarni to'ldirish** — foydalanuvchi o'zi haqida: qisqacha ma'lumot (Summary), ijtimoiy tarmoqlar (Social), ta'lim (Education), ish tajribasi (Experience), ko'nikmalar (Skills) va tillar (Language) bo'yicha formalarni bosqichma-bosqich to'ldiradi.
- **Shablonlar** — tayyor CV shablonlaridan birini tanlash.
- **CV yaratish va yuklab olish** — kiritilgan ma'lumotlar asosida tayyor rezyume ko'rinishi shakllanadi va `jsPDF` yordamida PDF fayl sifatida kompyuterga yuklab olinadi.
- **Aloqa** — foydalanuvchi bilan bog'lanish uchun sahifa.

## Texnologiyalar

- [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- [Vite](https://vitejs.dev/) — dasturlash va build vositasi
- [Vue Router](https://router.vuejs.org/) — sahifalar orasida navigatsiya
- [Pinia](https://pinia.vuejs.org/) — state management
- [VeeValidate](https://vee-validate.logaretm.com/) — forma validatsiyasi
- [Tailwind CSS](https://tailwindcss.com/) — stillar
- [jsPDF](https://github.com/parallax/jsPDF) — tayyor CV'ni PDF formatida generatsiya qilish
- [Vue Quill](https://github.com/vueup/vue-quill) — rich-text tahrirlovchi (masalan, ish tajribasi tavsifi uchun)
- [Swiper](https://swiperjs.com/) — slayder/karusel komponentlari
- [Boxicons](https://boxicons.com/) — ikonkalar

## Loyiha tuzilmasi

```
src/
  components/
    common/         # qayta ishlatiladigan UI komponentlari (accordion, modal, forma inputlari, quill editor)
    users/
      main/          # bosh sahifa bo'limlari (Intro, About, Quality, Features, Inspiration, Header, Footer)
      complete/      # "ma'lumotlarni to'ldirish" bosqichidagi forma bloklari
      partials/      # forma bloklarining alohida qismlari (Education, Experience, Skill va h.k.)
      modal/         # Login va "CV ko'rsatish" modal oynalari
  composables/
    makePdf.js       # HTML elementni PDF faylga aylantirish
    veeValidate.js    # VeeValidate konfiguratsiyasi (qoidalar, xabarlar)
  layouts/            # UserLayout, AuthLayout, AdminLayout
  views/users/         # HomeView, UserFormView, CompleteDataView, MakeCvView, TemplatesView, ContactView
  router/              # sahifalar marshrutlari
  stores/              # Pinia do'konlari
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

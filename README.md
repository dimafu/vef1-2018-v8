# Verkefni 8

The task is to program an interface that allows to add, change, delete and finish the project of the list.(???)

You are given HTML file with 3 items which should work after the program is ran. All styles which are needed for the project are given.

Elements have the following functionality:

* When clicked (`click`) on the text entry the text is changed into `<input>` which allows to change text. When clicked on `<enter>` the input is changed over to the tet again
    - Should set `focus` in input
* When pushed on `Eyða`  the input is deleted from the list
* When clicked on `checkbox` the input is marked as "done"
* When the form is filled in below the list and "Bæta við" is clicked on the input is added which works such that these inputs that were 
    - Should not allow to add empty strings or string a string that is just a space
    - After the input was added the text field should be cleared

JavaScript functionality should be implemented within the given module.

You can see how it works in `demo.mp4`.

`browser-sync` is set up in the projet:

```bash
npm install
npm run dev
```

## Mat

* 10% – Snyrtilegt JavaScript án villna
* 20% – Gefnar færslur virka
* 20% – Hægt að bæta við færslu
* 20% – Hægt að breyta færslu
* 20% – Hægt að eyða færslu
* 10% – Hægt að klára færslu

## Sett fyrir

Verkefni sett fyrir í fyrirlestri mánudaginn 29. október 2018.

## Skil

Skila skal undir „Verkefni og hlutaprófa“ á Uglu í seinasta lagi fyrir lok dags þriðjudaginn 6. nóvember 2018.

Skilaboð skulu innihalda:

* Slóð á verkefni á heimasvæði
* Slóð á GitHub repo fyrir verkefni, og dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/)). Notendanöfn þeirra eru `arnar44`, `mimiqkz`, `gorri4`, `hinriksnaer`, `gunkol`, `freyrdanielsson`, `osk`

## Einkunn

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 3,5% hvert, samtals 28% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 11%, samtals 22% af lokaeinkunn.

---

> Útgáfa 0.1

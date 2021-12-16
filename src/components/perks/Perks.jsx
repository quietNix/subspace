import "./Perks.scss";
import React from "react";

function Perks() {
    return (
        <section className="perks">
            <section className="perks__title">
                <h1 className="typo__heading-h1 typo__heading-h1--bold">Why Choose Subspace?</h1>
                <h2 className="typo__heading-h2 typo__heading-h2--dark">2000+ businesses trust their payments with Subspace</h2>
            </section>
            <section className="perks-services">
                <img src="https://s3-alpha-sig.figma.com/img/f363/2e92/36369ace11f516f4173eb04358e1f26e?Expires=1640563200&Signature=O7mfVlVK9jiOrqFNj-ihrDZ8R49bEFexRJTTOXiIuBlSr1NNLn0KZuAN90GlTU3WSHhQHdaAzSnezOXtzeyV9WrSh-G~H~mmccI1YSirXJFEEUUpdN3nJQPUOIouaiJNEUUwTb9hfMVP~vvEA4esycbtT2nOaLtJ3AvPdYdJu2Nmtmh7Ao12e~bE4TJNdwS~Xi1AFNId7y5IMhkGJ2h~nQBMwQfTumqUygBuBA95t1rLtD7zCzh6K94sNr2cC3M19UCwQ74BChVYej-Z~DOlrhFOo9PHNKlsYahj373cQQaXi9y-DmyucbsAZcfinaPG~CDTho~LMpQra~Tmx3sNxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="Netflix" className="perks-services__img" />
                <img src="https://s3-alpha-sig.figma.com/img/a1ec/8a07/fdcd7f4eba45de2484e791920e485d2c?Expires=1640563200&Signature=djz7qCiQrVZP-U~TvbRGOzO~9DO1mBYVzdJTsAvbxM~6LzMjiuEdiA~3M3ldnQrxB94BFjwFdE823jCjZAwnSK93Tpr0JC9KWKpvEHQP5ceatBYFM~YgaX7nD1uW1M1EwxlQVcGox~ZQJm1PQibjtPJH9TfI-rrg7O0mQJ33spGJNnUe9~gQLvhkvXUnNxT7~kbEbfkD7GtPsnrfChgfzguihPPGXaxPtCCt~eexcI6Vs~x4lM4bGVya8pm7KVINqS-3uKxHUrgOMs2mKdy8NRgV9EcHHKtCHyHAPuINWj26fYH-RYDlfa~cFVjo9RaXR5wReG0vptcmYoBZsG8ZdQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="Amazon Prime Video" className="perks-services__img" />
                <img src="https://s3-alpha-sig.figma.com/img/2c33/ba5b/438b22d2343bb8ed2f4076b501152565?Expires=1640563200&Signature=b5q9b1uNxu4SEX-mhgLjTS~s9Q1qAMGJlinXaQklHuuJhcWCVELzZ1GkY-WqgsacDOHEYqLjrOaDfU3Uk1x-mswhf9P7kunz7QZgygb3AdhTyoK04BjhiFScB7UA7zTiR30j5H7-LYSpA-62i2-7t8SSBtk-sREmoAtQpZs8TsZBDw9MBbWWUD1IPT9laxmijhbI5KazP4bGnkGmcPyHCcG~5YXC6hJFtAVR5-ctXn~eb6iCCp5d-VV4w9GoO7dDH~9EqtBYPynA-ylEala6eFeDu-8XNijzDjMkTZ9YPi~OTHulKMjPvPmRJkMQrQG0wjEs5tmpKbZQH4JvYc7S3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="Disney Hotstar +" className="perks-services__img" />
                <img src="https://s3-alpha-sig.figma.com/img/d182/cb6d/f626a1dd8f3d9066b71360d6194a669b?Expires=1640563200&Signature=XovgcJT3cJlD5fwzqCu4l6~9wBzUE~T8DjjF7OADK5r2Vj2wrHmQYNiyTvLbyFCQ9dBUyg3cPGUt2s~GiwdyF82a29nSRLD1ZKzteIemF4GNu~mZQZ6mL3EkzWv~g6UvlwfSUe68nig9NeH6Fg~h7rHTH1XP4NrxeX9CA2R8GGr-jOlB91Jysv9xNi~2ey7TIJzhH9nP7-JWAQXfFrHgDSzzrpfwx28FcbTuL05UYqxtOuuZWse5nY5Fcen1oyxkmCss6JCqfUSre0tChzdqIFSR2Pw99ydnC7jiK5P1F5~oPSuNWtfF1CMeCeZN6U7raN6vV~xSFHQ8NCrYnYSopQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="Sony Liv" className="perks-services__img" />
                <img src="https://s3-alpha-sig.figma.com/img/c711/152a/9afe1a60d462baa45835692d0b42388f?Expires=1640563200&Signature=hNJUMwoagMiZj2vJylAkUYVBVk8iz2ioWafHDnn-IePNnc~8mzqkPcLpDOUJZNFFXdLzN8BBNLfPVPl~6ZbZPZVjBmTltH4hJ8n5-sAggYdmfZ28Vl0phrihRTxaz6p8Gap5Ug2pDtl5DtPJfnNfACtn36YSARoXUnUvjD1FwKzG9ccBqBgMgcpRAZlsCy8sCtX947~6fJXKi7ejuuJcW91J7abUFf7BgNZMv8tQ6E9hArvJiR8MivvdWn47xQAk8hI7-IwX0O3KsV~GEjWR59ywRwaOw-P2z2Hjw-0jc-3txmE0~zp5u~pUcXAya6YSFT-vSHYsFQ-NXo6V4YXJdQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="Zee5" className="perks-services__img" />
                <img src="https://s3-alpha-sig.figma.com/img/87f6/d77f/8dc1fd4d05b8f922aed17ef1dc03f1a5?Expires=1640563200&Signature=b9tDHPoGW6-3g8LG43T2j206vPf9KFyDcq6~7I1fQh6jqz9iXH6GXkMDNGnypCFkQGeyregrbLTDaPGobNY7faySzuE96OWCUrG1lpkrwX1QMzEAwhmpjGmpyq0ZT0jr6~nBQco9dKFeXQyBAHQUzaghoclqvY6rfV-vBT23~pKcPJa3wB5wNoja95b36ozU82GwQKS3sD4n2FM4REu2jKYeRUyvUd9wJKNi~MMTtebFBP23GGhnFLByahOxW298cLLrM~lEsjQvyRgmRfoGeIMpw4AqTHlHc7HvjdC5Plh9j5KR259wXwzNlegSg9OtxuG9cht5INyEd5CBHBDlDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="Voot" className="perks-services__img" />
                <img src="https://s3-alpha-sig.figma.com/img/b83a/c429/22bf3479a454f50317e66d6f2f974027?Expires=1640563200&Signature=hoKTm28HAafmCKYFeNrRj3qdmKyTPKJEaE0wzCGkET1HP-xgfIU4Vc7KJtb7tElL0axJ-zMUdwDnqYbMCCZuO9wRqiedF1rcKaqD-iCEor8uggjHn~DmID7uQnqeBaOVzy~-2APGXCkvXP2IDhOjt9F10PAm86wcX8PQugxQhrkJvuJ0m9doZVLgSQBnKXfeixAxsiy0rTzC3thefCJk2qg9P6BlHypLlN~xZfMZBMabLU9cRlzyXUZvaohdb4oBZj1tD0KsBRkHHyVuSpyhktoxTzTtAqK1UmgxDM0G64lUUjV6~nI~oNiBOxQe38ZSkYEcV5-dfibzkI4jdZnJRw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="Sun Nxt" className="perks-services__img" />
                <img src="https://s3-alpha-sig.figma.com/img/77c9/301f/afda6b6317cd9d80000ccfc29c5240e7?Expires=1640563200&Signature=b8uDqO3hNdeqRqpfCED-8nrdLVuJk4u-OfA~Iy~Oc0PV~SpEl5ACdjoIW8nIBjKi4MVgVGppUBvxyMZl1ILOHCjtMDFXD5EizZU-QRo7lKlaYMcd46C0z7K9rXq4DGg38866pbFh1T2uTtyeWJPjaLNw1vIb0dVbJvb13DuSm~uKjI6ozkH2MkpYUEnCAH5Lmc6Y5cBgEs2XQxFZ6vdYZFhofBOCAWEb0S2jSzyifibBRlK5qVrRtq4cx6ythZHK82pZQU3JrErU-oECWytbzumS8657g0GW6mzr~meqHnzo0Y0nVGwBEW3Bw0qiYv8ShTd2kbbHtmiKTB74cZz8vw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="Aha Video" className="perks-services__img" />
                <img src="https://s3-alpha-sig.figma.com/img/1037/01e9/6178e19c65fa1923a038fad4b5a2908e?Expires=1640563200&Signature=RPF7yAfOaNJPeRteq4ir9bLqlQG4SrfRYhZ43yNWbMMtwMxRmpPjqfrYhy7XHk0L95z6wWb5mOprxT6V1LjCYCFGkvu~NFUG6Snj3T1CmQzLuwvZq3oG8tdyVzJ8BbzOIlsmKB4O2Ixf30~ZvJj~l-SxQCGSd2Eb73Ifjxb~Q5plzAzHFNKY0VasfYytegSQ1DnDu5bkor8KqwMc~QkZ0CM3IbLwYIxVHWrW3qx6kuDaaf6g1x23VXMn~Vd38ejZuqKGmDE1BzoMsGj7TCGajh5g9QvSYLv8uQ1u008Q6N-d~lEQ7~oOo6aL8uZSsZ~BefwaHOUmzJqPmLtCITd7YQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="Milk Basket" className="perks-services__img" />
                <img src="https://s3-alpha-sig.figma.com/img/118d/9742/bc84be54cd314c6c8931fca7d138658c?Expires=1640563200&Signature=I6XTokB737gGhvtiUZwktvBbIdQpSpCaljqd5hLZNWwMKbf6pLm1nV7qWKZyHtnibphnK0xmnYNTZiDkv-MaLwonNiNORkfl-L2jt6ilNaQdzYMp0OhVvi7WzKblcfz8udQfDcKyefaUQXCkKi8nrmEOFtc-Vq-R7jzd2rL1WKc8kh5TOixGZ7QTC4lWn-2~ECl8bq~LUtmudl9mBMMmIIlUfCBfSxuR~KCrdxn0LMm0g1wPS-OkIl4D1z43r-xLHZC5G8dzFeykbhAqT~SrZJVz4QGtctLi3h8mUroF-uQ7aXPkSboIemGRmrexhn5Mn8qXPBGepst5WBphSUX2xQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="Times of India" className="perks-services__img" />
                <img src="https://s3-alpha-sig.figma.com/img/5e5d/90fa/b4bcf5de39b61583b4bbb7f9c2899922?Expires=1640563200&Signature=M0TPtweM9KCd4KNjO0ngxcCT7ZDAOL6wwV1a2Hxhcy~SvWJI~mza6XvHvD9oLaTK6R4EeNbLsAtMkh2dEOBwZLJ9mF44slm3zbp-fZ7WINH5qvhq2Yb~bMJxviszpsX3w3k5LJ3QXsDRED-ZFBI84LF36nJosyOl7lQ183WeeVkzhiE2FoZCp3KzXA~R5hPtSxbQBtfeV98za4bUVVxxPw9ysgTBikAGh-LZPugvPaBX3Fb2slfj5lbNyFArQnjzEnISEsxP~lieT1uWgKCo~Ay5X3fsGclhZWBvkCi2qMEB0XYnZ3E~hQzFaJk7hauuTFyukNCF6fPgA0QIOO~C6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="Byjus" className="perks-services__img" />
                <img src="https://s3-alpha-sig.figma.com/img/d1c7/fb70/0a8b50de6a0e8195a5245468dba95338?Expires=1640563200&Signature=CJ34qBeNZKlGISoMR83aUwOAmpFdoGAEWt~aSymiJel7sQxNqhsSehZbqNwW2xYds8~GXhUG2AnWSgd6ZOS-kdzKtvjz72g~sXRTVFKvvK1OaqNA1fWZd0-Yi5Gl4Hlm6D2rvmJmtm8tlJbKV4LujD1kh3HNlHKkD3L7wr1rhcA19fN3BGZDiFFrGlZ5Otxg5YRiP2gmaEvq5yjNFjiq16wKFqKb5rFmNMOwAtWyZnx9137iP1i~uwxauby3XvLbizOgiekGx3rRdQtJo99YfQAoGoarXuT~PcZxAzgSSSu8Op2IBdl~hU-cSN~n4y0FrZp6~iWa9LNc-XGaD-cuSA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="cult fit" className="perks-services__img" />
            </section>
            <h3 className="typo__heading-h3 typo__heading-h3--dark">Need Help? We are just a click away. <a href="/#/">Contact Us</a></h3>

        </section>
    )

}

export default Perks;
<template>
    <ul>
        <li v-for="item in ucenici">
            {{item.ime}}
        </li>
    </ul>
</template>

<script>

export default {
    data() {
        return {
            ucenici: [
                { 
                    slike: 'http://lorempixel.com/400/200/',
                    ime: 'Saliha',
                    prezime: 'Salihovic',
                    godiste: '1934',
                    ocjene: ['5', '5', '5', '5', '5'],
                    vladanje: 5,
                    opciuspjeh: 5,
                    izostanci: 5
                },
                { 
                    slike: 'http://lorempixel.com/400/200/',
                    ime: 'Ivo',
                    prezime: 'Andric',
                    godiste: '1934',
                    ocjene: ['2', '2', '3', '3', '2'],
                    vladanje: 3,
                    opciuspjeh: 2,
                    izostanci: 3
                },
                { 
                    slike: 'http://lorempixel.com/400/200/',
                    ime: 'Neko',
                    prezime: 'Andric',
                    godiste: '1934',
                    ocjene: ['2', '2', '3', '3', '2'],
                    vladanje: 3,
                    opciuspjeh: 2,
                    izostanci: 3
                },
                { 
                    slike: 'http://lorempixel.com/400/200/',
                    ime: 'Neko',
                    prezime: 'Andric',
                    godiste: '1934',
                    ocjene: ['2', '2', '3', '3', '2'],
                    vladanje: 3,
                    opciuspjeh: 2,
                    izostanci: 3
                },
                { 
                    slike: 'http://lorempixel.com/400/200/',
                    ime: 'Neko',
                    prezime: 'Andric',
                    godiste: '1934',
                    ocjene: ['2', '2', '3', '3', '2'],
                    vladanje: 3,
                    opciuspjeh: 2,
                    izostanci: 3
                },
                { 
                    slike: 'http://lorempixel.com/400/200/',
                    ime: 'Neko',
                    prezime: 'Andric',
                    godiste: '1934',
                    ocjene: ['2', '2', '3', '3', '2'],
                    vladanje: 3,
                    opciuspjeh: 2,
                    izostanci: 3
                },
                { 
                    slike: 'http://lorempixel.com/400/200/',
                    ime: 'Neko',
                    prezime: 'Andric',
                    godiste: '1934',
                    ocjene: ['2', '2', '3', '3', '2'],
                    vladanje: 3,
                    opciuspjeh: 2,
                    izostanci: 3
                },
                { 
                    slike: 'http://lorempixel.com/400/200/',
                    ime: 'Neko',
                    prezime: 'Andric',
                    godiste: '1934',
                    ocjene: ['2', '2', '3', '3', '2'],
                    vladanje: 3,
                    opciuspjeh: 2,
                    izostanci: 3
                },
                { 
                    slike: 'http://lorempixel.com/400/200/',
                    ime: 'Neko',
                    prezime: 'Andric',
                    godiste: '1934',
                    ocjene: ['2', '2', '3', '3', '2'],
                    vladanje: 3,
                    opciuspjeh: 2,
                    izostanci: 3
                },
                { 
                    slike: 'http://lorempixel.com/400/200/',
                    ime: 'Neko',
                    prezime: 'Andric',
                    godiste: '1934',
                    ocjene: ['2', '2', '3', '3', '2'],
                    vladanje: 3,
                    opciuspjeh: 2,
                    izostanci: 3
                },
            ]
        }
  }
}
</script>

<style>

</style>

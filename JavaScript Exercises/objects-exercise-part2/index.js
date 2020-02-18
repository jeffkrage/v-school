const apparel = {
    jackets: "hoodie",
    stores: 'stores',
    brand: 'mammut',
    type: {
        color: "red",
        seasons: ['winter', 'spring','summer', 'fall' ],
        getsoda: function (){
            return 'pepsi'
        },
        wintergear: {
            skis: 'salomon',
            snowboard: 'burton',
            helments: 'niro',
            googles: 'oakley',
            gloves: 'mittens',
            pants: 'swisstech',
        },
        syfy: {
            weapson: [
                'laserbeam',
                'plasmarifle '  ,
                'grenadge',
                'beamcutter',
            ],
            strings: [
                'word',
                'another word',
                'final word'
            ],
            numbers: [
                1,
                7,
                0,
                44,
                11,
            ],
            actions: [ 
                function (x, y ,z){
                    return x + y + z
                },
                function (x, y, z){
                    return x - y + z
                },
                function (x, y, z){
                    return x - y - z
                }
            ],
            stringActions: [
                function (a, b){
                    return a + b
                }
            ]
        }     
    }
}

const actions = apparel.type.syfy.actions

// actions[0](3, 4, 5)

// for(let i = 0; i < actions.length; i++){
//     actions[i](5, 8, 9)
// }

const word = "jihun"

console.log(word.endsWith('n'))
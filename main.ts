namespace SpriteKind {
    export const Factory = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.x += 0 - tilemap.tileWidth()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.y += tilemap.tileWidth()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    placeFactory()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.x += tilemap.tileWidth()
})
function placeFactory () {
    factory = sprites.create(img`
. . . . c . . b b . . . . . . . 
. . . . c c . . c c . c . . . . 
. . . b c c c b b c . c c . . . 
. . . b c c c b c c f c c f f . 
. . . b b c d d b c d f f f f . 
. . f b c c d d f f f f c c f . 
. . f d f f d d f f c c c c f . 
. f f f f f f f c c c c c c f . 
. f b b b b b f c c c c c c f . 
. f b b b b b f c c c a c c f . 
. f b a c c b f c c c a c c f . 
. f b a a c b f c c c c c f . . 
. f b f a c b f c c c f f . . . 
. f b a a c b f c c f . . . . . 
. f f f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Factory)
    tiles.placeOnTile(factory, tilemap.locationOfSprite(cursor))
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.y += 0 - tilemap.tileWidth()
})
let factory: Sprite = null
let cursor: Sprite = null
tilemap.loadMap(tilemap.createMap(tiles.createTilemap(
            hex`1000100001080808080808080808080808080802050909090909090909090909090909070509090909090909090909090909090705090909090909090909090909090907050909090909090909090909090909070509090909090909090909090909090705090909090909090909090909090907050909090909090909090909090909070509090909090909090909090909090705090909090909090909090909090907050909090909090909090909090909070509090909090909090909090909090705090909090909090909090909090907050909090909090909090909090909070509090909090909090909090909090704060606060606060606060606060603`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath5],
            TileScale.Sixteen
        )))
cursor = sprites.create(img`
f f f f . . . . . . . . f f f f 
f f f f . . . . . . . . f f f f 
f f . . . . . . . . . . . . f f 
f f . . . . . . . . . . . . f f 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
f f . . . . . . . . . . . . f f 
f f . . . . . . . . . . . . f f 
f f f f . . . . . . . . f f f f 
f f f f . . . . . . . . f f f f 
`, SpriteKind.Player)
tiles.placeOnTile(cursor, tiles.getTileLocation(3, 3))
cursor.image.replace(1, 15)

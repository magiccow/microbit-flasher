function manyFlash()  {
    for (let i = 0; i < 20; i++) {
        flash()
    }
}
function flash()  {
    pins.digitalWritePin(DigitalPin.P0, 0)
    led.plot(0, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 1)
    led.unplot(0, 0)
    basic.pause(100)
}
basic.forever(() => {
    manyFlash()
    basic.pause(4000)
})

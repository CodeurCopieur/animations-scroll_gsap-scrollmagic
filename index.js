var controller = new ScrollMagic.Controller();


    gsap.to('#title-1', {duration: 1, color: "red"});
    var tl = new TimelineMax({onUpdate: updatePercentage})

    tl.to('.img1', 1, {width: "100%", height: "100%"}, 0)
    tl.to('#title-1', .5, {opacity: 1}, 1)
    tl.to('#title-1', .5, {opacity: 0}, 2)
    tl.to('.img2', 1, {height: "100%"}, 2)

    tl.from('#title-2', 1, { opacity: 0}, 2.2)

    tl.to('.img1', 0, {opacity: 0}, 3)
    tl.to('.img2', 1, {width: "60%", height: "60%", transform: "translate(-50% ,-50%)"} , 3)

    tl.to('#title-2', 1, {color: "rgba(0, 0, 0, 0)"}, 3)

    const scene = new ScrollMagic.Scene({
        triggerElement: ".wrapper",
        triggerHook: 0,
        duration: '100%'
    })
    .setPin('.wrapper')
    .setTween(tl)
    .addIndicators({
        name: 'start scene',
        colorTrigger: 'black',
        indent: 0,
        colorStart: 'blue',
        colorEnd: 'red'
      })
    .addTo(controller)
    

    function updatePercentage() {
        tl.progress()
    }

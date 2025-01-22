function delayedMessage(message,delay,callback)
{
    setTimeout(()=>
        {
            console.log("Message will be delayed for 1ms");
            callback();
        },delay)
}

delayedMessage("This is a demo for delaying a message",1000,()=>
{
    console.log("Demo done")
})

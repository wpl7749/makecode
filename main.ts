input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(932, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.tonePlayable(932, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
})

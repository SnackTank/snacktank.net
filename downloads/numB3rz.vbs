
a=MsgBox("Would you like to play a randomized number game?" ,4+64, "Numbers!")

score= Int(0)
attempts= Int(0)

if a= vbYes Then
z=InputBox("Please choose a difficulty. 10,50,100" , "You can choose you own!" , "100")



Dim q , nValue
randomize

nValue= Int((z * Rnd) + 1) 


Do

q= InputBox("Pick a number 1-" & z , "Score: " & score)
q= cInt(q)
if q= nValue Then
score= Int(score + 1)
attempts= Int(attempts + 1)
b=MsgBox(nValue & " was the correct number! " & "You did it in " & attempts & " attempts" ,0+64, "Your score is: " & score)
attempts= Int(0)
randomize
nValue= Int((z * Rnd) + 1)  

ElseIf q > nValue Then
c=MsgBox("Too high!")
attempts= Int(attempts + 1)

ElseIf q < nValue Then
d=MsgBox("Too low!")
attempts= Int(attempts + 1)




End if
Loop Until q= 0
q= vbCancel


End if
a= vbNo
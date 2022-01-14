ltrs = {
  'A':[[0,0],[0,0.4],[0.3,0.4],[0.3,0.2],[0,0.2],[0.3,0.2],[0.3,0]],
  'B':[[0,0],[0,0.4],[0.25,0.4],[0.3,0.35],[0.3,0.25],[0.25,0.25],[0,0.25],[0.25,0.25],[0.3,0.2],[0.3,0.05],[0.25,0],[0,0]],
  'C':[[0,0],[0.3,0],[0,0],[0,0.4],[0.3,0.4]],
  'D':[[0,0],[0,0.4],[0.25,0.4],[0.3,0.35],[0.3,0.05],[0.25,0],[0,0]],
  'E':[[0,0],[0.3,0],[0,0],[0,0.2],[0.3,0.2],[0,0.2],[0,0.4],[0.3,0.4]],
  'F':[[0,0],[0,0.2],[0.3,0.2],[0,0.2],[0,0.4],[0.3,0.4]],
  'G':[[0.3,0.4],[0.05,0.4],[0,0.35],[0,0.05],[0.05,0],[0.25,0],[0.3,0.05],[0.3,0.2],[0.1,0.2]],
  'H':[[0,0],[0,0.2],[0.3,0.2],[0.3,0],[0.3,0.4],[0.3,0.2],[0,0.2],[0,0.4]],
  'I':[[0,0],[0.2,0],[0.1,0],[0.1,0.2],[0.1,0.4],[0,0.4],[0.2,0.4]],
  'J':[[0.3,0.4],[0.3,0.05],[0.25,0],[0,0]],
  'K':[[0,0],[0,0.4],[0,0.2],[0.3,0.4],[0,0.2],[0.3,0]],
  'L':[[0,0],[0.3,0],[0,0],[0,0.4]],
  'M':[[0,0],[0,0.4],[0.15,0.2],[0.3,0.4],[0.3,0]],
  'N':[[0,0],[0,0.4],[0.3,0],[0.3,0.4]],
  'O':[[0,0],[0.3,0],[0.3,0.4],[0,0.4],[0,0]],
  'P':[[0,0],[0,0.4],[0.25,0.4],[0.3,0.35],[0.3,0.2],[0,0.2]],
  'Q':[[0,0.05],[0,0.4],[0.27,0.4],[0.27,0.05],[0.3,0],[0.27,0.05],[0,0.05]],
  'R':[[0,0],[0,0.4],[0.25,0.4],[0.3,0.35],[0.3,0.2],[0,0.2],[0.3,0]],
  'S':[[0,0],[0.3,0],[0.3,0.2],[0,0.2],[0,0.4],[0.3,0.4]],
  'T':[[0.15,0],[0.15,0.4],[0,0.4],[0.3,0.4]],
  'U':[[0,0.4],[0,0.05],[0.05,0],[0.25,0],[0.3,0.05],[0.3,0.4]],
  'V':[[0,0.4],[0.15,0],[0.3,0.4]],
  'W':[[0,0.4],[0.3/4,0],[0.3/(4/2),0.2],[0.3/(4/3),0],[0.3,0.4]],
  'X':[[0,0],[0.3,0.4],[0.15,0.2],[0,0.4],[0.3,0]],
  'Y':[[0.3,0.4],[0.15,0.2],[0.15,0],[0.15,0.2],[0,0.4]],
  'Z':[[0,0.4],[0.3,0.4],[0,0],[0.3,0]],
  ' ':[],
  ':':[[0.15,0],[0.15,0.05],[],[0.15,0.25],[0.15,0.3]],
  ',':[[0,15,0.05],[0.1,0]],
  '1':[[0.3,0],[0.3,0.4],[0.1,0.25]],
  '2':[[0,0.4],[0.3,0.4],[0.3,0.2],[0,0.2],[0,0],[0.3,0]],
  '3':[[0,0],[0.3,0],[0.3,0.2],[0,0.2],[0.3,0.2],[0.3,0.4],[0,0.4]],
  '4':[[0.25,0],[0.25,0.4],[0,0.15],[0.3,0.15]],
  '5':[[0,0],[0.3,0],[0.3,0.2],[0,0.2],[0,0.4],[0.3,0.4]],
  '6':[[0.3,0.4],[0,0.4],[0,0],[0.3,0],[0.3,0.2],[0,0.2]],
  '7':[[0,0.4],[0.3,0.4],[0,0]],
  '8':[[0,0],[0,0.4],[0.3,0.4],[0.3,0.2],[0,0.2],[0.3,0.2],[0.3,0],[0,0]],
  '9':[[0,0],[0.3,0],[0.3,0.4],[0,0.4],[0,0.2],[0.3,0.2]],
  '0':[[0,0],[0.3,0],[0.3,0.4],[0,0.4],[0,0]],
  '_':[[0,0],[0.3,0]],
  '\'':[[0.2,0.4],[0.15,0.35]],
  'И':[[0,0.4],[0,0],[0.3,0.4],[0.3,0]],
  'Й':[[0,0.35],[0,0],[0.3,0.35],[0.3,0],[],[0.05,0.4],[0.3,0.4]],
  'Я':[[0.3,0],[0.3,0.4],[0,0.4],[0,0.25],[0.3,0.25],[0,0]],
  'У':[[0,0],[0.3,0.4],[0.15,0.2],[0,0.4]],
  'Г':[[0,0],[0,0.4],[0.3,0.4]],
  'Б':[[0.3,0.4],[0,0.4],[0,0],[0.27,0],[0.3,0.03],[0.3,0.22],[0.27,0.25],[0,0.25]],
  'Д':[[0,0],[0,0.05],[0.3,0.05],[0.3,0],[0.3,0.05],[0.27,0.05],[0.27,0.4],[0.12,0.4],[0.04,0.05]],
  'Ж':[[0,0],[0.3,0.4],[0.15,0.2],[0,0.4],[0.3,0],[0.15,0.2],[0.15,0],[0.15,0.4]],
  '-':[[0,0.2],[0.3,0.2]],
  'Л':[[0,0],[0.15,0.4],[0.3,0]],
  'П':[[0,0],[0,0.4],[0.3,0.4],[0.3,0]],
  'Ф':[[0.15,0.4],[0.15,0],[0.15,0.1],[0,0.1],[0,0.3],[0.3,0.3],[0.3,0.1],[0.15,0.1]],
}
// Russian
ltrs['К']=ltrs['K']
ltrs['Р']=ltrs['P']
ltrs['Н']=ltrs['H']
ltrs['Е']=ltrs['E']
ltrs['Т']=ltrs['T']
ltrs['А']=ltrs['A']
ltrs['В']=ltrs['B']
ltrs['С']=ltrs['C']
ltrs['З']=ltrs['3']
ltrs['Х']=ltrs['X']
ltrs['О']=ltrs['O']
ltrs['М']=ltrs['M']

withzeroes = true

var sens = 3.25

//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );	

	img = app.CreateImage( null, 1, 0.9 )
	img.SetBackColor( "#000000" )
	img.SetAutoUpdate( false )
	img.SetLineWidth( 2 )
	
	layrasf = app.CreateLayout( "Linear", "Horizontal" )
	rasf = app.CreateText( "Уровень разфигаченности: " )
	skb = app.CreateSeekBar( 0.5 )
	skb.SetRange( 10 )
	skb.SetValue( sens )
	skb.SetOnTouch( (r)=>{
	  sens = r
	} )
	layrasf.AddChild( rasf )
	layrasf.AddChild( skb )
	lay.AddChild( layrasf )
	
	lay.AddChild( img )
	
	//ny = ny.now()

  app.Animate(()=>{
  	var year = new Date().getFullYear()
	var ny = new Date(year+1,0,1)/1000
    //alert(n)
    diff = ny-((new Date())/1000)
    //alert(diff)
    days = new String(Math.floor((diff/3600)/24));
    hrs = new String(Math.floor(diff/3600)%24);
    mns = new String(Math.floor(diff/60)%60);
    sec = new String(Math.floor(diff%60));
    if(withzeroes){
       if(hrs.length==1){hrs="0"+hrs}
       if(mns.length==1){mns="0"+mns}
       if(sec.length==1){sec="0"+sec}
    }
    st = hrs+":"+mns+":"+sec
    tick()
  },45)
	
	//Add layout to app.	
	app.AddLayout( lay );
}

function distort(img,letter,kx,ky,size=0.25)
{
	//img.Clear()
	modifer = 90
	strength = sens
	sx = 0
	sy = 0
	x = kx
	y = ky
	for(i in letter) {
	 lt = letter[i]
	 if(lt in ltrs) {
	   ltr = ltrs[lt]
	   old = ltr[0]
	   for(e in ltr){
	     coord = ltr[e]
	     if(coord[0]==null&&coord[1]==null){old=(e+1==ltr.length?ltr[e]:[0.15,0.25]);coord=old}
	     nx = (x+old[0])*size
	     ny = (y+1-old[1])*size
	     
	     nx1 = (x+coord[0])*size 
	     ny1 = (y+1-coord[1])*size
	     
	     if(coord!=[0,0]||old!=[0,0]){
	     nx+=Math.random()/modifer*size*strength
	     ny+=Math.random()/modifer*size*strength
	     nx1+=Math.random()/modifer*size*strength
	     ny1+=Math.random()/modifer*size*strength
	     }
	     
	     nx+=sx
	     nx1+=sx
	     ny+=sy
	     ny1+=sy
	     
       img.DrawLine( nx,ny,nx1,ny1 )
	     old = coord
	   }
	 }
	 sx+=(0.39)*size
	 if(lt=="\n"){sy+=0.15;sx=0}
	}
	//img.Update()
}

function tick(){
    img.Clear()
 
 /*
    distort(img,"until the\nnew Year".toUpperCase(),0.7,0,size=0.2)
    distort(img,days+" DAY",0.7,1.3)
    distort(img,st,0.5,2.1)
  */
  /*
  Cold Buckets
Feel The weeps
Against The Hall
In Fred that
  */
  
    distort(img,"Pulsemon".toUpperCase(),0.16,1,0.25)
    img.Update()
}

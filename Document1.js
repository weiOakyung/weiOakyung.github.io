var a = 0;
var b = 0;
var c = 0;

function A1() {
	location.href = "#n2";
	a++;
}

function B1() {
	location.href = "#n2";
	b++;
}

function C1() {
	location.href = "#n2";
	c++;
}

function A2() {
	location.href = "#n3";
	a++;
}

function B2() {
	location.href = "#n3";
	b++;
}

function C2() {
	location.href = "#n3";
	c++;
}

function A3() {
	location.href = "#n4";
	a++;
}

function B3() {
	location.href = "#n4";
	b++;
}

function C3() {
	location.href = "#n4";
	c++;
}

function A4() {
	location.href = "#result";
	a++;
}

function B4() {
	location.href = "#result";
	b++;
}

function C4() {
	location.href = "#result";
	c++;
}

function resultt() {
	if(a > b && a > c)
	{
		swal("你一直是個很自律的人，\n但有的時候可能會給自己太大的壓力跟要求，\n別忘了適時地休息，才能夠走的更久遠喔！");
	}
	else if(b > a && b > c)
	{
		swal("雖然偶爾會想要偷懶一下，但基本上還是會完成該做的事情，\n別忘了在放鬆之餘也要顧一下正事，\n才不會本末倒置、顧此失彼喔！");
	}
	else if(c > a && c > b)
	{
		swal("你是個生活藝術家，但有時候可能會過於放縱自己，\n在放鬆時也別忘了留意有沒有事情還沒做完，\n才不會被時間追著跑喔！");
	}
	else
	{
		swal("每當累得走不動了，就勇敢停下吧！但也別忘了重新開始喔！")
	}
}

function restartt() {
	location.href = "#n1";
	a = 0;
	b = 0;
	c = 0;
}
  

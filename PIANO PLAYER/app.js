document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'q':
            document.getElementById('C').currentTime = 0;
            document.getElementById('C').play()
            document.getElementById('t1').style.backgroundColor = '#FFC550'
            document.getElementById('t1').classList.add('playing')
            setTimeout(() => { document.getElementById('t1').style.backgroundColor = '#fff', document.getElementById('t1').classList.remove('playing')}, 500);
            break
        case 'z':
            document.getElementById('C1').currentTime = 0;
            document.getElementById('C1').play()
            document.getElementById('t2').style.backgroundColor = '#FFC550'
            document.getElementById('t2').classList.add('playing')
            setTimeout(() => { document.getElementById('t2').style.backgroundColor = '#000', document.getElementById('t2').classList.remove('playing')}, 500);
            break
        case 's':
            document.getElementById('D').currentTime = 0;
            document.getElementById('D').play()
            document.getElementById('t3').style.backgroundColor = '#FFC550'
            document.getElementById('t3').classList.add('playing')
            setTimeout(() => { document.getElementById('t3').style.backgroundColor = '#fff', document.getElementById('t3').classList.remove('playing')}, 500);
            break
        case 'e':
            document.getElementById('D1').currentTime = 0;
            document.getElementById('D1').play()
            document.getElementById('t4').style.backgroundColor = '#FFC550'
            document.getElementById('t4').classList.add('playing')
            setTimeout(() => { document.getElementById('t4').style.backgroundColor = '#000', document.getElementById('t4').classList.remove('playing')}, 500);
            break
        case 'd':
            document.getElementById('E').currentTime = 0;
            document.getElementById('E').play()
            document.getElementById('t5').style.backgroundColor = '#FFC550'
            document.getElementById('t5').classList.add('playing')
            setTimeout(() => { document.getElementById('t5').style.backgroundColor = '#fff', document.getElementById('t5').classList.remove('playing')}, 500);
            break
        case 'f':
            document.getElementById('F').currentTime = 0;
            document.getElementById('F').play()
            document.getElementById('t6').style.backgroundColor = '#FFC550'
            document.getElementById('t6').classList.add('playing')
            setTimeout(() => { document.getElementById('t6').style.backgroundColor = '#fff', document.getElementById('t6').classList.remove('playing')}, 500);
            break
        case 't':
            document.getElementById('F1').currentTime = 0;
            document.getElementById('F1').play()
            document.getElementById('t7').style.backgroundColor = '#FFC550'
            document.getElementById('t7').classList.add('playing')
            setTimeout(() => { document.getElementById('t7').style.backgroundColor = '#000', document.getElementById('t7').classList.remove('playing')}, 500);
            break
        case 'g':
            document.getElementById('G').currentTime = 0;
            document.getElementById('G').play()
            document.getElementById('t8').style.backgroundColor = '#FFC550'
            document.getElementById('t8').classList.add('playing')
            setTimeout(() => { document.getElementById('t8').style.backgroundColor = '#fff', document.getElementById('t8').classList.remove('playing')}, 500);
            break
        case 'y':
            document.getElementById('G1').currentTime = 0;
            document.getElementById('G1').play()
            document.getElementById('t9').style.backgroundColor = '#FFC550'
            document.getElementById('t9').classList.add('playing')
            setTimeout(() => { document.getElementById('t9').style.backgroundColor = '#000', document.getElementById('t9').classList.remove('playing')}, 500);
            break
        case 'h':
            document.getElementById('A').currentTime = 0;
            document.getElementById('A').play()
            document.getElementById('t10').style.backgroundColor = '#FFC550'
            document.getElementById('t10').classList.add('playing')
            setTimeout(() => { document.getElementById('t10').style.backgroundColor = '#fff', document.getElementById('t10').classList.remove('playing')}, 500);
            break
        case 'u':
            document.getElementById('A1').currentTime = 0;
            document.getElementById('A1').play()
            document.getElementById('t11').style.backgroundColor = '#FFC550'
            document.getElementById('t11').classList.add('playing')
            setTimeout(() => { document.getElementById('t11').style.backgroundColor = '#000', document.getElementById('t11').classList.remove('playing')}, 500);
            break
        case 'j':
            document.getElementById('B').currentTime = 0;
            document.getElementById('B').play()
            document.getElementById('t12').style.backgroundColor = '#FFC550'
            document.getElementById('t12').classList.add('playing')
            setTimeout(() => { document.getElementById('t12').style.backgroundColor = '#fff', document.getElementById('t12').classList.remove('playing')}, 500);
            break
        case 'k':
            document.getElementById('C2').currentTime = 0;
            document.getElementById('C2').play()
            document.getElementById('t13').style.backgroundColor = '#FFC550'
            document.getElementById('t13').classList.add('playing')
            setTimeout(() => { document.getElementById('t13').style.backgroundColor = '#fff', document.getElementById('t13').classList.remove('playing')}, 500);
            break
        case 'o':
            document.getElementById('C22').currentTime = 0;
            document.getElementById('C22').play()
            document.getElementById('t14').style.backgroundColor = '#FFC550'
            document.getElementById('t14').classList.add('playing')
            setTimeout(() => { document.getElementById('t14').style.backgroundColor = '#000', document.getElementById('t14').classList.remove('playing')}, 500);
            break
        case 'l':
            document.getElementById('D2').currentTime = 0;
            document.getElementById('D2').play()
            document.getElementById('t15').style.backgroundColor = '#FFC550'
            document.getElementById('t15').classList.add('playing')
            setTimeout(() => { document.getElementById('t15').style.backgroundColor = '#fff', document.getElementById('t15').classList.remove('playing')}, 500);
            break
        case 'p':
            document.getElementById('D22').currentTime = 0;
            document.getElementById('D22').play()
            document.getElementById('t16').style.backgroundColor = '#FFC550'
            document.getElementById('t16').classList.add('playing')
            setTimeout(() => { document.getElementById('t16').style.backgroundColor = '#000', document.getElementById('t16').classList.remove('playing')}, 500);
            break
        case 'm':
            document.getElementById('E0').currentTime = 0;
            document.getElementById('E0').play()
            document.getElementById('t17').style.backgroundColor = '#FFC550'
            document.getElementById('t17').classList.add('playing')
            setTimeout(() => { document.getElementById('t17').style.backgroundColor = '#fff', document.getElementById('t17').classList.remove('playing')}, 500);
            break
    }
    

})


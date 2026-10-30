const assert=require('node:assert/strict');const L=require('../app/logic.js');const test=require('node:test');
test('transferencia confirma débito y abono',()=>{const s=L.fresh();let t=L.transfer(s,'ana','luis','10.00','t1');assert.equal(t.monto,10);assert.equal(s.accounts[0].saldo,140);assert.equal(s.accounts[1].saldo,90)});
test('mismo id de solicitud no crea doble débito',()=>{const s=L.fresh();for(let i=0;i<10;i++)L.transfer(s,'ana','luis','10','t1');assert.equal(s.accounts[0].saldo,140);assert.equal(s.transactions.length,1)});
test('destinatario propio o inexistente es inválido',()=>{const s=L.fresh();assert.throws(()=>L.check(s,'ana','ana','10'));assert.throws(()=>L.check(s,'ana','fake','10'))});
test('monto inválido y saldo insuficiente no alteran cuentas',()=>{const s=L.fresh();for(const x of ['0','-1','abc','10.999','200'])assert.throws(()=>L.check(s,'ana','luis',x));assert.equal(s.accounts[0].saldo,150)});
test('previsualizar sin ejecutar no modifica cuentas',()=>{const s=L.fresh();L.check(s,'ana','luis','10');assert.equal(s.accounts[0].saldo,150);assert.equal(s.transactions.length,0)});

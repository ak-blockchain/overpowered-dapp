const _0x4d51a8=_0x558d;(function(_0x2f1e5b,_0x107673){const _0x1bf5ac=_0x558d,_0x7fe47d=_0x2f1e5b();while(!![]){try{const _0x5cb754=-parseInt(_0x1bf5ac(0x102))/0x1*(parseInt(_0x1bf5ac(0xd6))/0x2)+parseInt(_0x1bf5ac(0xf9))/0x3+parseInt(_0x1bf5ac(0xca))/0x4+-parseInt(_0x1bf5ac(0xf7))/0x5*(parseInt(_0x1bf5ac(0xa1))/0x6)+parseInt(_0x1bf5ac(0xbb))/0x7*(parseInt(_0x1bf5ac(0x113))/0x8)+parseInt(_0x1bf5ac(0xbd))/0x9+parseInt(_0x1bf5ac(0xb4))/0xa*(-parseInt(_0x1bf5ac(0xf2))/0xb);if(_0x5cb754===_0x107673)break;else _0x7fe47d['push'](_0x7fe47d['shift']());}catch(_0x365f11){_0x7fe47d['push'](_0x7fe47d['shift']());}}}(_0x2cbb,0xb30a2));function _0x558d(_0x3669ac,_0x34e761){const _0x2cbb19=_0x2cbb();return _0x558d=function(_0x558d5d,_0x5b0001){_0x558d5d=_0x558d5d-0x74;let _0x4fd0b7=_0x2cbb19[_0x558d5d];return _0x4fd0b7;},_0x558d(_0x3669ac,_0x34e761);}const serverUrl=_0x4d51a8(0xec),appId=_0x4d51a8(0x115),DECIMALS=0x9,contractAddress=_0x4d51a8(0xdc),pairAddress=_0x4d51a8(0x95);var userAddress,ethers,mainContract,days=0x1;let sharedValues={'price':0x0,'yourBalance':0x0,'apy':383025.8};Moralis[_0x4d51a8(0xdf)]({'serverUrl':serverUrl,'appId':appId});function linkButtons(){const _0x141306=_0x4d51a8;document['getElementById'](_0x141306(0x10d))[_0x141306(0xee)]=loginManual,document[_0x141306(0x118)](_0x141306(0xe0))[_0x141306(0xee)]=copyToken,document['getElementById'](_0x141306(0xb8))[_0x141306(0xee)]=copyPair,document['getElementById'](_0x141306(0xa4))[_0x141306(0xee)]=goToPage,document[_0x141306(0x118)](_0x141306(0xa2))[_0x141306(0xee)]=enterAccount,document[_0x141306(0x118)](_0x141306(0x85))['onclick']=enterHomepage,document[_0x141306(0x118)](_0x141306(0x81))[_0x141306(0xee)]=enterCalculator;}function copyToken(){const _0x29b1de=_0x4d51a8;document[_0x29b1de(0x118)]('tokenClipboard')[_0x29b1de(0xbe)]=_0x29b1de(0xc2),document[_0x29b1de(0x118)](_0x29b1de(0x98))[_0x29b1de(0xbe)]='visibility:\x20visible',setTimeout(function(){const _0x4cca4b=_0x29b1de;document[_0x4cca4b(0x118)]('tokenClipboard')['style']=_0x4cca4b(0x104),document['getElementById'](_0x4cca4b(0x98))[_0x4cca4b(0xbe)]=_0x4cca4b(0xc2);},0x1f4),navigator['clipboard']['writeText'](contractAddress);}function copyPair(){const _0x186729=_0x4d51a8;document[_0x186729(0x118)](_0x186729(0x110))[_0x186729(0xbe)]=_0x186729(0xc2),document[_0x186729(0x118)](_0x186729(0x8c))[_0x186729(0xbe)]=_0x186729(0x104),setTimeout(function(){const _0xbf1256=_0x186729;document['getElementById'](_0xbf1256(0x110))[_0xbf1256(0xbe)]=_0xbf1256(0x104),document['getElementById'](_0xbf1256(0x8c))['style']='visibility:\x20hidden';},0x1f4),navigator[_0x186729(0xfe)][_0x186729(0xf3)](pairAddress);}function goToPage(){const _0x1dacee=_0x4d51a8;window[_0x1dacee(0xab)](_0x1dacee(0xa6),_0x1dacee(0x11c));}function beautifyAddress(_0x759da4,_0x4cddaa){const _0x27b0bf=_0x4d51a8;return _0x759da4['slice'](0x0,_0x4cddaa)+_0x27b0bf(0x7c)+_0x759da4[_0x27b0bf(0x112)](-0x3);}function updateUserAddress(_0x4d0e52){const _0x1b8111=_0x4d51a8;userAddress=_0x4d0e52,document[_0x1b8111(0x118)](_0x1b8111(0xb9))[_0x1b8111(0xaf)]=beautifyAddress(_0x4d0e52,0x5);}async function loginManual(){await logOut(),await login();}async function login(){const _0x541536=_0x4d51a8;provider=await Moralis[_0x541536(0x11d)](),ethers=Moralis['web3Library'];const _0x204417=_0x541536(0xe6);await Moralis['switchNetwork'](_0x204417);let _0x54fab2=Moralis['User'][_0x541536(0xfd)]();!_0x54fab2&&(_0x54fab2=await Moralis['Web3'][_0x541536(0xaa)]({'signingMessage':_0x541536(0xc6)})),updateUserAddress(_0x54fab2[_0x541536(0x7b)]['ethAddress']),getStats();}function _0x2cbb(){const _0x2969d3=['8335864KSErFX','constructor','b8h417TrHPsmSiWzVY4HsaBgoWO5SMl9Rs0T5CIx','owner','isOwner','getElementById','_symbol','display:\x20none;','_totalSupply','_blank','enableWeb3','OwnershipTransferred','calc_return','firePitBalance','calculator','owner_','RATE_DECIMALS','tokenPriceInput','tokenAmountInput','transfer','attributes','...','function','Web3API','apy','_initRebaseStartTime','btn_calc','getTime','totalFee','log','btn_menu','balanceOf','manualSync','price','menuButton\x20menuButton_selected','value','replace','pairTick','_flag','getCirculatingSupply','string','bsc','withdrawAllToTreasury','calcAPY','treasuryReceiver','apyInput','THE_PAIR_HERE','accountNextReward','totalSupply','tokenTick','pair','_treasuryReceiver','display:\x20block;','bool','firePit','_autoRebase','calcBalance','\x20days','1824012ZtWWUU','btn_account','event','btn_docs','logged\x20out','https://overpowered.finance','_lastRebasedTime','calc_initial','receive','authenticate','open','newOwner','_autoAddLiquidity','className','innerHTML','Approval','payable','usdPrice','checkFeeExempt','10iaqerZ','Contract','OwnershipRenounced','safuuInsuranceFundFee','copyPair','usersWallet','spender','7mAdRab','menuButton\x20menuButton_clickable','3523059SvsHzz','style','defi','tokenPrice','account','visibility:\x20hidden','sellFee','allowance','safuuInsuranceFundReceiver','Requesting\x20permission\x20to\x20read\x20account\x20balances','_lastAddLiquidityTime','swapEnabled','Transfer','5514436bIxiea','yourBalance','_firePit','max','tokenPriceFutureInput','liquidityFee','view','setAutoRebase','round','rebase','uint256','from','2Udiarr','getPairReserves','homepage','getTokenBalances','0x78618c5114Cf2B71A3fe0Af9d7c5aEb129E90487','name','0xe5ba47fd94cb645ba4119222e34fb33f59c7cd90','nonpayable','who','start','copyToken','poolValue','uint8','toFixed','_decimals','address','0x38','setFeeReceivers','pairAddress','LogRebase','MAX_UINT256','DECIMALS','https://msbsejcr97ct.usemoralis.com:2053/server','treasuryValue','onclick','setAutoAddLiquidity','autoLiquidityReceiver','_botAddress','20023399AOHYbx','writeText','renounceOwnership','pairContract','contract\x20IPancakeSwapPair','5TjakqN','PancakeSwapv2','1179099ACwvlk','percentFirePit','decimals','_address','current','clipboard','marketCap','reserve0','setBotBlacklist','347419HthHTS','blacklist','visibility:\x20visible','_addr','token','previousOwner','floor','contract\x20IPancakeSwapRouter','length','approve','logOut','walletCircle','getTokenPrice','selectedRange','pairClipboard','User','slice'];_0x2cbb=function(){return _0x2969d3;};return _0x2cbb();}async function logOut(){const _0x2bfe85=_0x4d51a8;await Moralis[_0x2bfe85(0x111)][_0x2bfe85(0x10c)](),console['log'](_0x2bfe85(0xa5));}async function getStats(){const _0x1d30a9=_0x4d51a8;var _0x38cd7d=await new ethers[(_0x1d30a9(0xb5))](contractAddress,abi,provider);let _0x145ff2=await _0x38cd7d[_0x1d30a9(0x8e)]();const _0x3ae5e6={'address':contractAddress,'chain':_0x1d30a9(0x90),'exchange':_0x1d30a9(0xf8)},_0x4c2286=await Moralis[_0x1d30a9(0x7e)][_0x1d30a9(0x106)][_0x1d30a9(0x10e)](_0x3ae5e6);let _0xc35989=await _0x38cd7d['treasuryReceiver'](),_0x1d346f=await _0x38cd7d[_0x1d30a9(0x86)](_0xc35989),_0x58cc4b=_0x1d346f*_0x4c2286['usdPrice'],_0x581238=_0x145ff2/0xa**0x5*_0x4c2286[_0x1d30a9(0xb2)],_0xd95092=await _0x38cd7d[_0x1d30a9(0x9d)](),_0x5c30ef=await _0x38cd7d['balanceOf'](_0xd95092),_0x5a1ccf=_0x5c30ef*_0x4c2286[_0x1d30a9(0xb2)],_0x107af5=await _0x38cd7d[_0x1d30a9(0x99)]();const _0x5d7b15={'pair_address':_0x107af5,'chain':_0x1d30a9(0x90)},_0xf5b414=await Moralis['Web3API'][_0x1d30a9(0xbf)][_0x1d30a9(0xd7)](_0x5d7b15),_0x568781=_0xf5b414[_0x1d30a9(0x100)];sharedValues[_0x1d30a9(0x88)]=_0x4c2286[_0x1d30a9(0xb2)][_0x1d30a9(0xe3)](0x2),updateFrontend(_0x145ff2,_0x58cc4b/0xa**0x5,_0x581238,_0x5c30ef/0xa**0x5,_0x5a1ccf/0xa**0x5,(_0x5c30ef/_0x145ff2*0x64)[_0x1d30a9(0xe3)](0x2),(_0x568781/0xa**0x12*0x17c)[_0x1d30a9(0xe3)](0x0)),setupCountdown(),updateCalcFrontend();}function setupCountdown(){const _0x4acac9=_0x4d51a8;var _0x3190bb=0x3e8*0x3c*0xf,_0x19c23f=new Date();_0x19c23f=new Date(Math[_0x4acac9(0xd2)](_0x19c23f[_0x4acac9(0x82)]()/_0x3190bb)*_0x3190bb+_0x3190bb);var _0x2f1fbd=setInterval(function(){const _0x1a29b4=_0x4acac9;var _0x1bd673=new Date()[_0x1a29b4(0x82)](),_0x3961eb=_0x19c23f-_0x1bd673,_0x4e8b26=Math[_0x1a29b4(0x108)](_0x3961eb/(0x3e8*0x3c*0x3c*0x18)),_0x1361fa=Math[_0x1a29b4(0x108)](_0x3961eb%(0x3e8*0x3c*0x3c*0x18)/(0x3e8*0x3c*0x3c)),_0x33cd87=Math[_0x1a29b4(0x108)](_0x3961eb%(0x3e8*0x3c*0x3c)/(0x3e8*0x3c)),_0x1cb85d=Math['floor'](_0x3961eb%(0x3e8*0x3c)/0x3e8);rebaseElements=document['getElementsByClassName']('rebaseCountdown'),console[_0x1a29b4(0x84)](_0x1a29b4(0xd3)+rebaseElements);for(var _0x4a0506=0x0;_0x4a0506<rebaseElements[_0x1a29b4(0x10a)];_0x4a0506++){rebaseElements[_0x4a0506][_0x1a29b4(0xaf)]='00'+':'+('0'+_0x33cd87)[_0x1a29b4(0x112)](-0x2)+':'+('0'+_0x1cb85d)[_0x1a29b4(0x112)](-0x2);}_0x3961eb<0x0&&setupCountdown();},0x3e8);}function updateFrontend(_0x3e174a,_0x1af754,_0x15b296,_0xb3938,_0x5cb68a,_0x5b72d0,_0x5806a8){const _0x347f7b=_0x4d51a8;document[_0x347f7b(0x118)]('circulatingSupply')[_0x347f7b(0xaf)]=_0x3e174a,document[_0x347f7b(0x118)](_0x347f7b(0xc0))[_0x347f7b(0xaf)]='$'+sharedValues[_0x347f7b(0x88)],document[_0x347f7b(0x118)](_0x347f7b(0xed))[_0x347f7b(0xaf)]='$'+_0x1af754[_0x347f7b(0xe3)](0x0)[_0x347f7b(0x8b)](/\B(?=(\d{3})+(?!\d))/g,','),document[_0x347f7b(0x118)](_0x347f7b(0xff))[_0x347f7b(0xaf)]='$'+_0x15b296['toFixed'](0x0)['replace'](/\B(?=(\d{3})+(?!\d))/g,','),document['getElementById'](_0x347f7b(0x74))[_0x347f7b(0xaf)]=_0xb3938[_0x347f7b(0xe3)](0x0),document[_0x347f7b(0x118)]('firePitValue')[_0x347f7b(0xaf)]='$'+_0x5cb68a['toFixed'](0x0)[_0x347f7b(0x8b)](/\B(?=(\d{3})+(?!\d))/g,','),document[_0x347f7b(0x118)](_0x347f7b(0xfa))[_0x347f7b(0xaf)]=_0x5b72d0+'%',document[_0x347f7b(0x118)](_0x347f7b(0xe1))[_0x347f7b(0xaf)]='$'+_0x5806a8[_0x347f7b(0x8b)](/\B(?=(\d{3})+(?!\d))/g,',');}async function getTokenBalance(){const _0x55f883=_0x4d51a8,_0x2cf82f={'chain':_0x55f883(0x90),'address':_0x55f883(0xda)},_0x53f0f9=await Moralis[_0x55f883(0x7e)][_0x55f883(0xc1)][_0x55f883(0xd9)](_0x2cf82f);}function enterHomepage(){const _0x45a66f=_0x4d51a8;document[_0x45a66f(0x118)](_0x45a66f(0xd8))[_0x45a66f(0xbe)]=_0x45a66f(0x9b),document[_0x45a66f(0x118)](_0x45a66f(0xc1))[_0x45a66f(0xbe)]='display:\x20none;',document[_0x45a66f(0x118)](_0x45a66f(0x75))[_0x45a66f(0xbe)]='display:\x20none;',document[_0x45a66f(0x118)](_0x45a66f(0x85))['className']='menuButton\x20menuButton_selected',document[_0x45a66f(0x118)](_0x45a66f(0xa2))[_0x45a66f(0xae)]=_0x45a66f(0xbc),document['getElementById'](_0x45a66f(0x81))[_0x45a66f(0xae)]=_0x45a66f(0xbc),login();}function enterAccount(){const _0x5093b5=_0x4d51a8;document[_0x5093b5(0x118)](_0x5093b5(0xd8))['style']='display:\x20none;',document[_0x5093b5(0x118)](_0x5093b5(0xc1))['style']='display:\x20block;',document[_0x5093b5(0x118)](_0x5093b5(0x75))['style']='display:\x20none;',document[_0x5093b5(0x118)](_0x5093b5(0x85))['className']='menuButton\x20menuButton_clickable',document[_0x5093b5(0x118)](_0x5093b5(0xa2))['className']=_0x5093b5(0x89),document['getElementById'](_0x5093b5(0x81))[_0x5093b5(0xae)]='menuButton\x20menuButton_clickable',setupCountdown(),getAccountStats();}function enterCalculator(){const _0x43195c=_0x4d51a8;document[_0x43195c(0x118)](_0x43195c(0xd8))[_0x43195c(0xbe)]='display:\x20none;',document['getElementById'](_0x43195c(0xc1))[_0x43195c(0xbe)]=_0x43195c(0x11a),document[_0x43195c(0x118)](_0x43195c(0x75))['style']=_0x43195c(0x9b),document[_0x43195c(0x118)](_0x43195c(0x85))[_0x43195c(0xae)]=_0x43195c(0xbc),document[_0x43195c(0x118)](_0x43195c(0xa2))[_0x43195c(0xae)]=_0x43195c(0xbc),document[_0x43195c(0x118)](_0x43195c(0x81))[_0x43195c(0xae)]=_0x43195c(0x89),updateCalcFrontend(),updateSlider(0x1);}async function getAccountStats(){const _0x4f0d86=_0x4d51a8;var _0x48402d=await new ethers[(_0x4f0d86(0xb5))](contractAddress,abi,provider);let _0x54f581=await _0x48402d['balanceOf'](userAddress),_0x214650=0.0235*_0x54f581,_0xa3a79d=_0x214650*parseFloat(sharedValues['price']);updateAccountFrontend(_0x54f581,_0x214650,_0xa3a79d);}function updateAccountFrontend(_0xef45a,_0x277a1b,_0x57c2da){const _0x4d405c=_0x4d51a8;document[_0x4d405c(0x118)](_0x4d405c(0xcb))[_0x4d405c(0xaf)]=sharedValues['yourBalance'],document[_0x4d405c(0x118)]('accountPrice')['innerHTML']='$'+sharedValues['price'],document[_0x4d405c(0x118)](_0x4d405c(0x96))[_0x4d405c(0xaf)]=_0x277a1b,document['getElementById']('accountNextUSD')[_0x4d405c(0xaf)]=_0x57c2da;}function updateCalcFrontend(){const _0x1fcb74=_0x4d51a8;document[_0x1fcb74(0x118)]('calcPrice')['innerHTML']='$'+sharedValues[_0x1fcb74(0x88)],document['getElementById'](_0x1fcb74(0x92))[_0x1fcb74(0xaf)]=sharedValues['apy']+'%',document['getElementById'](_0x1fcb74(0x9f))[_0x1fcb74(0xaf)]=sharedValues['yourBalance'],document[_0x1fcb74(0x118)]('tokenPriceInput')[_0x1fcb74(0x8a)]=''+sharedValues[_0x1fcb74(0x88)],document['getElementById'](_0x1fcb74(0xce))['value']=''+sharedValues[_0x1fcb74(0x88)],document['getElementById'](_0x1fcb74(0x79))[_0x1fcb74(0x8a)]=''+Math[_0x1fcb74(0xcd)](0xa,sharedValues[_0x1fcb74(0xcb)]);}function updateSlider(_0x44f503){const _0x56a44c=_0x4d51a8;_0x44f503!=-0x1&&(days=(_0x44f503*3.68)['toFixed'](0x0)-0x3);document[_0x56a44c(0x118)](_0x56a44c(0x10f))[_0x56a44c(0xaf)]=days+_0x56a44c(0xa0);let _0x2d55c9=document['getElementById'](_0x56a44c(0x79))[_0x56a44c(0x8a)],_0x23c14d=document[_0x56a44c(0x118)](_0x56a44c(0x94))['value'],_0x4d0ac2=document[_0x56a44c(0x118)](_0x56a44c(0x78))[_0x56a44c(0x8a)],_0x5e593a=document['getElementById']('tokenPriceFutureInput')[_0x56a44c(0x8a)];document[_0x56a44c(0x118)](_0x56a44c(0xa8))['innerHTML']='$'+(_0x2d55c9*_0x4d0ac2)[_0x56a44c(0xe3)](0x2);let _0x12e3b8=_0x2d55c9*1.0228**days;document[_0x56a44c(0x118)]('calc_rewards')[_0x56a44c(0xaf)]=_0x12e3b8['toFixed'](0x2),document[_0x56a44c(0x118)](_0x56a44c(0x11f))[_0x56a44c(0xaf)]='$'+(_0x12e3b8*_0x5e593a-_0x2d55c9*_0x4d0ac2)[_0x56a44c(0xe3)](0x2);}function maxAmount(){const _0x4cf3ad=_0x4d51a8;document[_0x4cf3ad(0x118)](_0x4cf3ad(0x79))[_0x4cf3ad(0x8a)]=sharedValues['yourBalance'];}function currentAPY(){const _0x1685fd=_0x4d51a8;document['getElementById'](_0x1685fd(0x94))[_0x1685fd(0x8a)]=sharedValues[_0x1685fd(0x7f)]+'%';}function currentPrice(){const _0x3eee53=_0x4d51a8;document[_0x3eee53(0x118)](_0x3eee53(0x78))[_0x3eee53(0x8a)]=''+sharedValues[_0x3eee53(0x88)];}function currentFuture(){const _0x407edf=_0x4d51a8;document[_0x407edf(0x118)](_0x407edf(0xce))[_0x407edf(0x8a)]=''+sharedValues[_0x407edf(0x88)];}linkButtons(),enterHomepage();const abi=[{'inputs':[],'stateMutability':_0x4d51a8(0xdd),'type':_0x4d51a8(0x114)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4d51a8(0xe5),'name':_0x4d51a8(0x116),'type':_0x4d51a8(0xe5)},{'indexed':!![],'internalType':_0x4d51a8(0xe5),'name':_0x4d51a8(0xba),'type':_0x4d51a8(0xe5)},{'indexed':![],'internalType':_0x4d51a8(0xd4),'name':_0x4d51a8(0x8a),'type':_0x4d51a8(0xd4)}],'name':_0x4d51a8(0xb0),'type':_0x4d51a8(0xa3)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4d51a8(0xd4),'name':'epoch','type':'uint256'},{'indexed':![],'internalType':_0x4d51a8(0xd4),'name':_0x4d51a8(0x97),'type':'uint256'}],'name':_0x4d51a8(0xe9),'type':_0x4d51a8(0xa3)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4d51a8(0xe5),'name':'previousOwner','type':_0x4d51a8(0xe5)}],'name':_0x4d51a8(0xb6),'type':_0x4d51a8(0xa3)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4d51a8(0xe5),'name':_0x4d51a8(0x107),'type':_0x4d51a8(0xe5)},{'indexed':!![],'internalType':_0x4d51a8(0xe5),'name':'newOwner','type':'address'}],'name':_0x4d51a8(0x11e),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4d51a8(0xe5),'name':_0x4d51a8(0xd5),'type':_0x4d51a8(0xe5)},{'indexed':!![],'internalType':_0x4d51a8(0xe5),'name':'to','type':_0x4d51a8(0xe5)},{'indexed':![],'internalType':_0x4d51a8(0xd4),'name':_0x4d51a8(0x8a),'type':_0x4d51a8(0xd4)}],'name':_0x4d51a8(0xc9),'type':_0x4d51a8(0xa3)},{'inputs':[],'name':_0x4d51a8(0xeb),'outputs':[{'internalType':_0x4d51a8(0xd4),'name':'','type':'uint256'}],'stateMutability':'view','type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0xea),'outputs':[{'internalType':_0x4d51a8(0xd4),'name':'','type':_0x4d51a8(0xd4)}],'stateMutability':'view','type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0x77),'outputs':[{'internalType':_0x4d51a8(0xe2),'name':'','type':_0x4d51a8(0xe2)}],'stateMutability':'view','type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0xad),'outputs':[{'internalType':_0x4d51a8(0x9c),'name':'','type':'bool'}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0x9e),'outputs':[{'internalType':'bool','name':'','type':_0x4d51a8(0x9c)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0xe4),'outputs':[{'internalType':_0x4d51a8(0xe2),'name':'','type':_0x4d51a8(0xe2)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0x80),'outputs':[{'internalType':_0x4d51a8(0xd4),'name':'','type':_0x4d51a8(0xd4)}],'stateMutability':_0x4d51a8(0xd0),'type':'function'},{'inputs':[],'name':_0x4d51a8(0xc7),'outputs':[{'internalType':_0x4d51a8(0xd4),'name':'','type':_0x4d51a8(0xd4)}],'stateMutability':'view','type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0xa7),'outputs':[{'internalType':_0x4d51a8(0xd4),'name':'','type':'uint256'}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':'_name','outputs':[{'internalType':_0x4d51a8(0x8f),'name':'','type':_0x4d51a8(0x8f)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0x119),'outputs':[{'internalType':'string','name':'','type':'string'}],'stateMutability':_0x4d51a8(0xd0),'type':'function'},{'inputs':[],'name':_0x4d51a8(0x11b),'outputs':[{'internalType':_0x4d51a8(0xd4),'name':'','type':_0x4d51a8(0xd4)}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':_0x4d51a8(0xe5),'name':_0x4d51a8(0x76),'type':_0x4d51a8(0xe5)},{'internalType':_0x4d51a8(0xe5),'name':_0x4d51a8(0xba),'type':_0x4d51a8(0xe5)}],'name':_0x4d51a8(0xc4),'outputs':[{'internalType':_0x4d51a8(0xd4),'name':'','type':_0x4d51a8(0xd4)}],'stateMutability':_0x4d51a8(0xd0),'type':'function'},{'inputs':[{'internalType':_0x4d51a8(0xe5),'name':_0x4d51a8(0xba),'type':_0x4d51a8(0xe5)},{'internalType':_0x4d51a8(0xd4),'name':_0x4d51a8(0x8a),'type':_0x4d51a8(0xd4)}],'name':_0x4d51a8(0x10b),'outputs':[{'internalType':_0x4d51a8(0x9c),'name':'','type':'bool'}],'stateMutability':_0x4d51a8(0xdd),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0xf0),'outputs':[{'internalType':_0x4d51a8(0xe5),'name':'','type':_0x4d51a8(0xe5)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[{'internalType':_0x4d51a8(0xe5),'name':_0x4d51a8(0xde),'type':_0x4d51a8(0xe5)}],'name':_0x4d51a8(0x86),'outputs':[{'internalType':_0x4d51a8(0xd4),'name':'','type':_0x4d51a8(0xd4)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[{'internalType':_0x4d51a8(0xe5),'name':'','type':_0x4d51a8(0xe5)}],'name':_0x4d51a8(0x103),'outputs':[{'internalType':_0x4d51a8(0x9c),'name':'','type':_0x4d51a8(0x9c)}],'stateMutability':'view','type':_0x4d51a8(0x7d)},{'inputs':[{'internalType':_0x4d51a8(0xe5),'name':_0x4d51a8(0x105),'type':_0x4d51a8(0xe5)}],'name':_0x4d51a8(0xb3),'outputs':[{'internalType':'bool','name':'','type':_0x4d51a8(0x9c)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0xfb),'outputs':[{'internalType':'uint8','name':'','type':_0x4d51a8(0xe2)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[{'internalType':'address','name':_0x4d51a8(0xba),'type':_0x4d51a8(0xe5)},{'internalType':'uint256','name':'subtractedValue','type':_0x4d51a8(0xd4)}],'name':'decreaseAllowance','outputs':[{'internalType':_0x4d51a8(0x9c),'name':'','type':_0x4d51a8(0x9c)}],'stateMutability':'nonpayable','type':'function'},{'inputs':[],'name':'feeDenominator','outputs':[{'internalType':_0x4d51a8(0xd4),'name':'','type':'uint256'}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':'firePit','outputs':[{'internalType':_0x4d51a8(0xe5),'name':'','type':_0x4d51a8(0xe5)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':'firePitFee','outputs':[{'internalType':'uint256','name':'','type':_0x4d51a8(0xd4)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0x8e),'outputs':[{'internalType':'uint256','name':'','type':_0x4d51a8(0xd4)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[{'internalType':_0x4d51a8(0xd4),'name':'accuracy','type':'uint256'}],'name':'getLiquidityBacking','outputs':[{'internalType':_0x4d51a8(0xd4),'name':'','type':_0x4d51a8(0xd4)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[{'internalType':_0x4d51a8(0xe5),'name':_0x4d51a8(0xba),'type':_0x4d51a8(0xe5)},{'internalType':_0x4d51a8(0xd4),'name':'addedValue','type':_0x4d51a8(0xd4)}],'name':'increaseAllowance','outputs':[{'internalType':_0x4d51a8(0x9c),'name':'','type':_0x4d51a8(0x9c)}],'stateMutability':'nonpayable','type':_0x4d51a8(0x7d)},{'inputs':[],'name':'isNotInSwap','outputs':[{'internalType':_0x4d51a8(0x9c),'name':'','type':_0x4d51a8(0x9c)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0x117),'outputs':[{'internalType':_0x4d51a8(0x9c),'name':'','type':_0x4d51a8(0x9c)}],'stateMutability':_0x4d51a8(0xd0),'type':'function'},{'inputs':[],'name':_0x4d51a8(0xcf),'outputs':[{'internalType':_0x4d51a8(0xd4),'name':'','type':_0x4d51a8(0xd4)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0x87),'outputs':[],'stateMutability':_0x4d51a8(0xdd),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0xdb),'outputs':[{'internalType':'string','name':'','type':_0x4d51a8(0x8f)}],'stateMutability':'view','type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0x116),'outputs':[{'internalType':_0x4d51a8(0xe5),'name':'','type':_0x4d51a8(0xe5)}],'stateMutability':'view','type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0x99),'outputs':[{'internalType':'address','name':'','type':_0x4d51a8(0xe5)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0xe8),'outputs':[{'internalType':_0x4d51a8(0xe5),'name':'','type':_0x4d51a8(0xe5)}],'stateMutability':_0x4d51a8(0xd0),'type':'function'},{'inputs':[],'name':_0x4d51a8(0xf5),'outputs':[{'internalType':_0x4d51a8(0xf6),'name':'','type':_0x4d51a8(0xe5)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0xf4),'outputs':[],'stateMutability':_0x4d51a8(0xdd),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':'router','outputs':[{'internalType':_0x4d51a8(0x109),'name':'','type':_0x4d51a8(0xe5)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0xb7),'outputs':[{'internalType':_0x4d51a8(0xd4),'name':'','type':'uint256'}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x4d51a8(0xc5),'outputs':[{'internalType':'address','name':'','type':'address'}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0xc3),'outputs':[{'internalType':_0x4d51a8(0xd4),'name':'','type':_0x4d51a8(0xd4)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[{'internalType':_0x4d51a8(0x9c),'name':_0x4d51a8(0x8d),'type':_0x4d51a8(0x9c)}],'name':_0x4d51a8(0xef),'outputs':[],'stateMutability':_0x4d51a8(0xdd),'type':_0x4d51a8(0x7d)},{'inputs':[{'internalType':_0x4d51a8(0x9c),'name':'_flag','type':'bool'}],'name':_0x4d51a8(0xd1),'outputs':[],'stateMutability':'nonpayable','type':_0x4d51a8(0x7d)},{'inputs':[{'internalType':'address','name':_0x4d51a8(0xf1),'type':_0x4d51a8(0xe5)},{'internalType':_0x4d51a8(0x9c),'name':'_flag','type':_0x4d51a8(0x9c)}],'name':_0x4d51a8(0x101),'outputs':[],'stateMutability':'nonpayable','type':_0x4d51a8(0x7d)},{'inputs':[{'internalType':'address','name':'_autoLiquidityReceiver','type':'address'},{'internalType':_0x4d51a8(0xe5),'name':_0x4d51a8(0x9a),'type':_0x4d51a8(0xe5)},{'internalType':_0x4d51a8(0xe5),'name':'_safuuInsuranceFundReceiver','type':_0x4d51a8(0xe5)},{'internalType':_0x4d51a8(0xe5),'name':_0x4d51a8(0xcc),'type':_0x4d51a8(0xe5)}],'name':_0x4d51a8(0xe7),'outputs':[],'stateMutability':_0x4d51a8(0xdd),'type':_0x4d51a8(0x7d)},{'inputs':[{'internalType':'address','name':_0x4d51a8(0xfc),'type':_0x4d51a8(0xe5)}],'name':'setLP','outputs':[],'stateMutability':_0x4d51a8(0xdd),'type':_0x4d51a8(0x7d)},{'inputs':[{'internalType':_0x4d51a8(0xe5),'name':'_pairAddress','type':_0x4d51a8(0xe5)}],'name':'setPairAddress','outputs':[],'stateMutability':_0x4d51a8(0xdd),'type':_0x4d51a8(0x7d)},{'inputs':[{'internalType':_0x4d51a8(0xe5),'name':_0x4d51a8(0x105),'type':_0x4d51a8(0xe5)}],'name':'setWhitelist','outputs':[],'stateMutability':'nonpayable','type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0xc8),'outputs':[{'internalType':_0x4d51a8(0x9c),'name':'','type':_0x4d51a8(0x9c)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':'symbol','outputs':[{'internalType':_0x4d51a8(0x8f),'name':'','type':_0x4d51a8(0x8f)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0x83),'outputs':[{'internalType':_0x4d51a8(0xd4),'name':'','type':_0x4d51a8(0xd4)}],'stateMutability':_0x4d51a8(0xd0),'type':'function'},{'inputs':[],'name':'totalSupply','outputs':[{'internalType':_0x4d51a8(0xd4),'name':'','type':'uint256'}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':_0x4d51a8(0xe5),'name':'to','type':_0x4d51a8(0xe5)},{'internalType':_0x4d51a8(0xd4),'name':_0x4d51a8(0x8a),'type':_0x4d51a8(0xd4)}],'name':_0x4d51a8(0x7a),'outputs':[{'internalType':_0x4d51a8(0x9c),'name':'','type':_0x4d51a8(0x9c)}],'stateMutability':_0x4d51a8(0xdd),'type':_0x4d51a8(0x7d)},{'inputs':[{'internalType':_0x4d51a8(0xe5),'name':_0x4d51a8(0xd5),'type':'address'},{'internalType':_0x4d51a8(0xe5),'name':'to','type':'address'},{'internalType':_0x4d51a8(0xd4),'name':'value','type':_0x4d51a8(0xd4)}],'name':'transferFrom','outputs':[{'internalType':_0x4d51a8(0x9c),'name':'','type':_0x4d51a8(0x9c)}],'stateMutability':_0x4d51a8(0xdd),'type':_0x4d51a8(0x7d)},{'inputs':[{'internalType':_0x4d51a8(0xe5),'name':_0x4d51a8(0xac),'type':'address'}],'name':'transferOwnership','outputs':[],'stateMutability':_0x4d51a8(0xdd),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':'treasuryFee','outputs':[{'internalType':_0x4d51a8(0xd4),'name':'','type':_0x4d51a8(0xd4)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0x93),'outputs':[{'internalType':_0x4d51a8(0xe5),'name':'','type':_0x4d51a8(0xe5)}],'stateMutability':_0x4d51a8(0xd0),'type':_0x4d51a8(0x7d)},{'inputs':[],'name':_0x4d51a8(0x91),'outputs':[],'stateMutability':'nonpayable','type':_0x4d51a8(0x7d)},{'stateMutability':_0x4d51a8(0xb1),'type':_0x4d51a8(0xa9)}];

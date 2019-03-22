/*

请勿动此代码 价值一个亿

 参数

 number          数量
 multiple        倍数
 wanNumber       万数量
 thousandNumber  千数量
 bestNumber      百数量
 tenNumber       十数量
 sumObj          总和对象 ()

*/
class Algorithm {
    constructor(args) {
        this.argsObj = args;
    }

}


// 重庆时时彩票
class CurrentLottery extends Algorithm {
    constructor(...args) {
        super(...args);
        let arrObj = [...args];
        let splite;
        splite = arrObj[0].val.split('|');
        if (arrObj == []) return console.error('请传参');
        let arraysum = {};
        for (let i = 0; i < splite.length; i++) {
            let obj = [];
            let objlength = splite[i].split(',');
            for (let k = 0; k < objlength.length; k++) {
                obj.push(parseInt(objlength[k]));
            }
            arraysum[i] = obj;
        }
        this.CurrentObj = { 'data': arraysum, "multiple": arrObj[0].multiple };
    }

    // 一星复试       // 好事成双  一帆风顺   三星报喜 四季发财

    firstStart() {
        let LotteryObj = this.CurrentObj;
        let number = LotteryObj.data[0].length + LotteryObj.data[1].length + LotteryObj.data[2].length + LotteryObj.data[3].length + LotteryObj.data[4].length;
        let data = { "noteNumber": number, "totalPrice": number * 2 * this.argsObj.multiple }
        return data;
    }

    //  前二直选直选复式
    PrevTwodMoreType() {
        let LotteryObj = this.CurrentObj;
        if (!LotteryObj.data[0] || !LotteryObj.data[1] || !LotteryObj.multiple) {
            console.error('error 参数错误');
            return;
        }
        let wanNumber = LotteryObj.data[0].length;
        let thousandNumber = LotteryObj.data[1].length;
        let multiple = LotteryObj.multiple;
        // 注数
        let note = wanNumber * thousandNumber;
        // 价格
        let price = note * multiple * 2;
        let data = {
            noteNumber: note,
            totalPrice: price
        }
        return data;
    };

    //  前二直选直选和值
    PrevTwodSumValue() {
        let LotteryObj = this.CurrentObj;
        let sumArray = LotteryObj.data[0];
        if (!sumArray || !LotteryObj.multiple) {
            console.error('error 参数错误');
            return;
        }
        let [totalnote, initialNumber, number, data, pricetotal] = [0, 0];
        for (let i = 0; i < sumArray.length; i++) {
            number = sumArray[i];
            initialNumber = number == 10 ? 9 : (number < 10 ? number + 1 : 18 - number + 1);
            totalnote += initialNumber;
        }
        pricetotal = totalnote * LotteryObj.multiple * 2;
        data = {
            pricetotal: pricetotal,
            totalnote: totalnote
        }
        return data;
    }


    // 前二直选跨度
    PrevTwoSpan() {
        // 改
        let LotteryObj = this.CurrentObj;
        let sumArray = LotteryObj.data[0];

        if (!sumArray || !LotteryObj.multiple) {
            console.error('error 参数错误');
            return;
        }
        let [totalnote, pricetotal, data] = [0];
        for (let i = 0; i < sumArray.length; i++) {
            totalnote += sumArray[i] == 0 ? 10 : (10 - sumArray[i]) * 2;
        }
        pricetotal = totalnote * LotteryObj.multiple * 2
        data = {
            pricetotal: pricetotal,
            totalnote: totalnote
        }
        return data;
    }


    // 前二组选组选复试
    PrevTwogMoreType() {
        // 改
        let LotteryObj = this.CurrentObj;
        let lnumber = LotteryObj.data[0].length;
        if (!lnumber || !LotteryObj.multiple) {
            console.error('error 参数错误');
            return;
        }
        let [totalnote, number, pricetotal, data] = [45, lnumber];
        for (let i = 9; i > number - 1; i--) {
            totalnote = totalnote - i;
        }
        pricetotal = totalnote * 2 * LotteryObj.multiple;
        data = {
            pricetotal: pricetotal,
            totalnote: totalnote
        }
        return data;
    }


    // 前二组选组选合值
    PrevTwogSumValue() {
        // 改
        let LotteryObj = this.CurrentObj;
        let sumArray = LotteryObj.data[0];
        if (!sumArray || !LotteryObj.multiple) {
            console.error('error 参数错误');
            return;
        }
        let [totalnote, pricetotal, data] = [0];
        for (let i = 0; i < sumArray.length; i++) {
            totalnote += sumArray[i] <= 9 ? Math.round(sumArray[i] / 2) : Math.round((18 - sumArray[i]) / 2);
        }
        pricetotal = totalnote * 2 * LotteryObj.multiple;
        data = {
            pricetotal: pricetotal,
            totalnote: totalnote
        }
        return data;
    }

    // 前二组选组选单式
    PrevTwogSingle() {
        // 改
        let LotteryObj = this.CurrentObj;
        let sumArray = LotteryObj.data[0];
        // console.log(sumArray);
        if (!sumArray || !LotteryObj.multiple) {
            console.error('error 参数错误');
            return;
        }
        let g = [];
        let c = [];
        let totalnote, data, pricetotal;
        let repeat = new Set(sumArray);
        let array = Array.from(repeat);
        for (let i = 0; i < array.length; i++) {
            let b = (array[i] + "").split("").reverse().join();
            c.push(parseInt(b.replace(/,/g, "")));
            if (c.indexOf(array[i]) == -1) {
                g.push(array[i]);
            }
        }
        //注数
        totalnote = g.length;
        // 总价
        pricetotal = totalnote * LotteryObj.multiple * 2;
        data = {
            totalnote: totalnote,
            pricetotal: pricetotal,
            data: g
        }
        return data;
    }


    // 前三直选直选跨度
    PrevThreeSpan() {
        // 改
        let LotteryObj = this.CurrentObj;
        let lsumArray = LotteryObj.data[0];

        if (!lsumArray || !LotteryObj.multiple) {
            console.error('error 参数错误');
            return;
        }
        let curretnNumber = 6;
        let [totalnote, sum, data, sumArray, pricetotal] = [0];
        for (let i = 0; i < lsumArray.length; i++) {
            totalnote += lsumArray[i] == 0 ? 10 : parseInt(lsumArray[i] * ((10 - lsumArray[i]) * 6));
        }
        pricetotal = totalnote * 2 * LotteryObj.multiple;
        data = {
            totalnote: totalnote,
            pricetotal: pricetotal
        }
        return data;
    }

    // 前三直选直选和值
    PrevThreeSumValue() {
        // 改
        let LotteryObj = this.CurrentObj;
        let lsumArray = LotteryObj.data[0];
        if (!lsumArray || !LotteryObj.multiple) {
            console.error('error 参数错误');
            return;
        }
        let numbernote, pricetotal, data, setnumber;
        let totalnote = 0;
        for (let i = 0; i < lsumArray.length; i++) {
            numbernote = lsumArray[i] > 13 ? 27 - lsumArray[i] : lsumArray[i];
            switch (numbernote) {
                case 0:
                    setnumber = 1
                    break;
                case 1:
                    setnumber = 3
                    break;
                case 2:
                    setnumber = 6
                    break;
                case 3:
                    setnumber = 10
                    break;
                case 4:
                    setnumber = 15
                    break;
                case 5:
                    setnumber = 21
                    break;
                case 6:
                    setnumber = 28
                    break;
                case 7:
                    setnumber = 36
                    break;
                case 8:
                    setnumber = 45
                    break;
                case 9:
                    setnumber = 55
                    break;
                case 10:
                    setnumber = 63
                    break;
                case 11:
                    setnumber = 69
                    break;
                case 12:
                    setnumber = 73
                    break;
                case 13:
                    setnumber = 75
                    break;

            }
            totalnote += setnumber

        }
        pricetotal = totalnote * 2 * LotteryObj.multiple;
        data = {
            totalnote: totalnote,
            pricetotal: pricetotal
        }
        return data;
    }


    // 前三组选组选和值
    PrevThreeMoreSumValue() {
        // 改
        let LotteryObj = this.CurrentObj;
        let lsumArray = LotteryObj.data[0];

        if (!lsumArray || !LotteryObj.multiple) {
            console.error('error 参数错误');
            return;
        }

        let numbernote, pricetotal, data, setnumber;
        let totalnote = 0;
        for (let i = 0; i < lsumArray.length; i++) {
            numbernote = lsumArray[i] > 13 ? 27 - lsumArray[i] : lsumArray[i];
            switch (numbernote) {
                case 1:
                    setnumber = 1
                    break;
                case 2:
                    setnumber = 2
                    break;
                case 3:
                    setnumber = 2
                    break;
                case 4:
                    setnumber = 4
                    break;
                case 5:
                    setnumber = 5
                    break;
                case 6:
                    setnumber = 6
                    break;
                case 7:
                    setnumber = 8
                    break;
                case 8:
                    setnumber = 10
                    break;
                case 9:
                    setnumber = 11
                    break;
                case 10:
                    setnumber = 13
                    break;
                case 11:
                    setnumber = 14
                    break;
                case 12:
                    setnumber = 14
                    break;
                case 13:
                    setnumber = 15
                    break;

            }
            totalnote += setnumber

        }
        pricetotal = totalnote * 2 * LotteryObj.multiple;
        data = {
            totalnote: totalnote,
            pricetotal: pricetotal
        }
        return data;
    }


    // 前三直选复式
    PrevThreeMoreValue() {
        // 改

        let LotteryObj = this.CurrentObj;
        let lsumArray = LotteryObj.data;
        let [wan, qian, bai, multiple, totalnote, pricetotal, data] = [lsumArray[0].length, lsumArray[1].length, lsumArray[2].length, LotteryObj.multiple, 0, 0]
        if (!wan || !qian || !bai || !multiple) {
            console.error('error 参数错误');
            return;
        }
        totalnote = wan * qian * bai;
        pricetotal = totalnote * 2 * multiple;
        data = {
            totalnote: totalnote,
            pricetotal: pricetotal
        }
        return data;
    }

    //  前三组三
    PrevThreegroupValue() {
        // 改
        let LotteryObj = this.CurrentObj;
        let number = LotteryObj.data[0].length;
        let [totalnote, pricetotal, data] = [0, 0];
        totalnote = (number - 1) * number
        pricetotal = totalnote * 2 * LotteryObj.multiple;
        data = {
            totalnote: totalnote,
            pricetotal: pricetotal
        }
        return data;
    }


    //  前三组选组六

    PrevThreegroupSixValue() {
        // 改

        let LotteryObj = this.CurrentObj;
        let number = LotteryObj.data[0].length;
        let [totalnote, pricetotal, data] = [0, 0];
        totalnote = number * (number - 1) * (number - 2) / 6;
        pricetotal = totalnote * 2 * LotteryObj.multiple;
        data = {
            totalnote: totalnote,
            pricetotal: pricetotal
        }
        return data;

    }



    // 前三组选混合组选

    PrevThreeMoreGroupValue() {
        //改
        let LotteryObj = this.CurrentObj;
        let sumArray = LotteryObj.data[0];
        let [totalnote, pricetotal, data, arrayObj, arraylottery, totalPrice] = [0, 0, , sumArray];
        let arrrarySet = new Set(arrayObj);
        let arrrayArray = Array.from(arrrarySet);
        let arraysort = [];
        for (let i = 0; i < arrrayArray.length; i++) {
            let a = arrrayArray[i];
            let array = (a + "").split("");
            for (let k = 0; k < array.length; k++) {
                array.sort(function (a, b) {
                    return a - b;
                })
                let g = array[0] + array[1] + array[2];
                if (g !== arrrayArray[i]) {
                    arraysort.push(g);
                    let c = new Set(arraysort);
                    arraylottery = Array.from(c);
                }
            }
        }

        totalPrice = arraylottery.length * 2 * LotteryObj.multiple;
        data = {
            sumArray: arraylottery,
            totalPrice: totalPrice,
            totalnote: arraylottery.length

        }
        return data;

    }

    // 前三组选组六单式

    PrevThreedSixValue() {
        // 改
        let LotteryObj = this.CurrentObj;
        let sumArray=LotteryObj.data[0];
        let [totalnote, pricetotal, data, arrayObj, arraylottery, totalPrice] = [0, 0, ,sumArray];
        let arrrarySet = new Set(arrayObj);
        let arrrayArray = Array.from(arrrarySet);
        // let arraysort = [];
        totalPrice = arrrayArray.length * 2 * LotteryObj.multiple;
        data = {
            sumArray: arrrayArray,
            totalPrice: totalPrice,
            totalnote: arrrayArray.length
        }
        return data;
    }








    // 前三组选组三单式

    PrevThreedValue() {
        // 改
        let LotteryObj = this.CurrentObj;
        let sumArray = LotteryObj.data[0];
        let [totalnote, pricetotal, data, arrayObj, arraylottery, totalPrice] = [0, 0, , sumArray];
        let arrrarySet = new Set(arrayObj);
        let arrrayArray = Array.from(arrrarySet);
        let arraysort = [];
        for (let i = 0; i < arrrayArray.length; i++) {
            let a = arrrayArray[i];
            let array = (a + "").split("");
            for (let k = 0; k < array.length; k++) {
                array.sort(function (a, b) {
                    return a - b;
                })
                if (array[0] == array[1] == array[2]) return;
                if (array[0] == array[1] || array[1] == array[2]) {

                    let g = array[0] + array[1] + array[2];
                    if (g !== arrrayArray[i]) {
                        arraysort.push(g);
                        let c = new Set(arraysort);
                        arraylottery = Array.from(c);
                    }
                }

            }
        }
        totalPrice = arraylottery.length * 2 * LotteryObj.multiple;
        data = {
            sumArray: arraylottery,
            totalPrice: totalPrice,
            totalnote: arraylottery.length
        }
        return data;
    }


    // 前三组选组六单式
    PrevThreeMoredValue() {
        let LotteryObj = this.CurrentObj;
        let [totalnote, pricetotal, data, arrayObj, arraylottery, totalPrice] = [0, 0, , LotteryObj.sumArray];
        let arrrarySet = new Set(arrayObj);
        let arrrayArray = Array.from(arrrarySet);
        let arraysort = [];
        for (let i = 0; i < arrrayArray.length; i++) {
            let a = arrrayArray[i];
            let array = (a + "").split("");
            for (let k = 0; k < array.length; k++) {
                array.sort(function (a, b) {
                    return a - b;
                })
                if (array[0] == array[1] == array[2]) return;
                if (array[0] != array[1] && array[1] != array[2] && array[0] != array[2]) {
                    let g = array[0] + array[1] + array[2];
                    if (g !== arrrayArray[i]) {
                        arraysort.push(g);
                        let c = new Set(arraysort);
                        arraylottery = Array.from(c);
                    }
                }
            }
        }

        totalPrice = arraylottery.length * 2 * LotteryObj.multiple;
        data = {
            sumArray: arraylottery,
            totalPrice: totalPrice,
            totalnote: arraylottery.length
        }
        return data;
    }

    // 四星直选复式

    FoureStartMoreValue() {
        // 改
        // wanNumber       万数量
        // thousandNumber  千数量
        // bestNumber      百数量
        // tenNumber       十数量
        let LotteryObj = this.CurrentObj;
        let number = LotteryObj.data;
        console.log(number);
        console.log(number[0]);
        let [totalnote, totalPrice, data] = [0, 0];
        totalnote = number[0].length * number[1].length * number[2].length * number[3].length;
        console.log(totalnote)
        totalPrice = totalnote * 2 * LotteryObj.multiple;
        data = {
            totalnote: totalnote,
            totalPrice: totalPrice
        }
        return data;
    }

    // 四星直选单式
    FourStartdValue() {
        // 改
        let LotteryObj = this.CurrentObj;
        let sumArray = LotteryObj.data[0];
        let [totalnote, totalPrice, data, arraySet] = [0, 0];
        arraySet = new Set(sumArray);
        let array = Array.from(arraySet);
        totalPrice = array.length * 2 * LotteryObj.multiple;
        data = {
            tatalArray: array,
            totalnote: array.length,
            totalPrice: totalPrice
        }
        return data;
    }

    // 四星组选组选24
    FoureStartGroupTwentyFour() {
        // 改

        let LotteryObj = this.CurrentObj;
        let number = LotteryObj.data[0].length;
        let total = (number * (number - 1) * (number - 2) * (number - 3)) / 24
        let totalPrice = total * 2 * LotteryObj.multiple;
        let data = {
            totalPrice: totalPrice,
            total: total
        }
        return data;
    }

    // 四星组选组选12
    FoureStartGroupTwelve() {
        // 改
        let LotteryObj = this.CurrentObj;
        let lenths = LotteryObj.data;
        let [setArray, settaolnote, totalnote, totalPrice, data] = [[], 0, 0];
        console.log(lenths[0])
        for (let i = 0; i < lenths[0].length; i++) {
            if ((lenths[1]).indexOf(lenths[0][i]) == -1) {
                let lotnumber = 0;
                lotnumber = lenths[1].length;
                settaolnote = (lenths[1].length * (lotnumber - 1)) / 2;
                settaolnote = settaolnote < 1 ? 1 : settaolnote;
                totalnote += settaolnote

            } else {
                let lotnumbers = 0;
                lotnumbers = lenths[1].length - 1;
                // console.log(lotnumbers);
                settaolnote = ((lenths[1].length - 1) * (lotnumbers - 1)) / 2;
                // console.log(settaolnote);
                settaolnote = settaolnote < 1 ? 1 : settaolnote;
                totalnote += settaolnote
            }
        }
        totalPrice = totalnote * 2 * LotteryObj.multiple;
        data = {
            totalnote: totalnote,
            totalPrice: totalPrice
        }
        return data;
    }

    // 四星组选组选6
    fourStartGroupSix() {
        //改
        let LotteryObj = this.CurrentObj;
        let number = LotteryObj.data[0].length;
        let [totalnote, totalPrice, data] = [0, 0];
        totalnote = (number) * (number - 1) / 2;
        totalPrice = totalnote * 2 * LotteryObj.multiple;
        data = {
            totalnote: totalnote,
            totalPrice: totalPrice,

        }
        return data;
    }
    // 四星组选组选4
    fourStartGroupFour() {
        // 改

        let LotteryObj = this.CurrentObj;
        let wanArray = LotteryObj.data[0];
        let thousandArray = LotteryObj.data[1];
        let [setArray, settaolnote, totalnote, totalPrice, data] = [[], 0, 0];
        for (let i = 0; i < wanArray.length; i++) {
            if ((thousandArray).indexOf(wanArray[i]) == -1) {
                let lotnumber = 0;
                lotnumber = thousandArray.length;
                settaolnote = (thousandArray.length);
                settaolnote = settaolnote < 1 ? 1 : settaolnote;
                totalnote += settaolnote

            } else {
                let lotnumbers = 0;
                lotnumbers = thousandArray.length - 1;
                // console.log(lotnumbers);
                settaolnote = ((thousandArray.length - 1));
                // console.log(settaolnote);
                settaolnote = settaolnote < 1 ? 1 : settaolnote;
                totalnote += settaolnote
            }
        }
        totalPrice = totalnote * 2 * LotteryObj.multiple;
        data = {
            totalnote: totalnote,
            totalPrice: totalPrice
        }
        return data;
    }


    // 五星直选复试
    FiveStartMoreValue() {
        // 改
        let LotteryObj = this.CurrentObj;
        let wanNumber = LotteryObj.data[0].length;
        let thousandNumber = LotteryObj.data[1].length;
        let bestNumber = LotteryObj.data[2].length;
        let tenNumber = LotteryObj.data[3].length;
        let bits = LotteryObj.data[4].length;
        let totalnote = wanNumber * thousandNumber * bestNumber * tenNumber * bits;
        let totalPrice = totalnote * 2 * LotteryObj.multiple;
        let data = {
            totalPrice: totalPrice,
            totalnote: totalnote
        }
        return data;
    }

    // 五星组选组选120
    FiveStartGroupOneTwo() {
        // 改
        let LotteryObj = this.CurrentObj;
        let number = LotteryObj.data[0].length;
        let totalnote = (number * (number - 1) * (number - 2) * (number - 3) * (number - 4)) / 120;
        let totalPrice = totalnote * 2 * LotteryObj.multiple;
        let data = {
            totalnote: totalnote,
            totalPrice: totalPrice
        }
        return data;
    }

    //五星组选组选60
    FiveStartGroupSixTen() {
        // 改
        let LotteryObj = this.CurrentObj;
        let wanArray = LotteryObj.data[0];
        let thousandArray = LotteryObj.data[1];
        let [setArray, settaolnote, totalnote, totalPrice, data] = [[], 0, 0];
        for (let i = 0; i < wanArray.length; i++) {
            if ((thousandArray).indexOf(wanArray[i]) == -1) {
                let lotnumber = 0;
                lotnumber = thousandArray.length;
                settaolnote = ((lotnumber) * (lotnumber - 1) * (lotnumber - 2)) / 6;
                // settaolnote = settaolnote < 1 ? 1 : settaolnote;
                totalnote += settaolnote

            } else {
                let lotnumbers = 0;
                lotnumbers = thousandArray.length - 1;
                // console.log(lotnumbers);
                settaolnote = ((thousandArray.length - 1) * (thousandArray.length - 2) * (thousandArray.length - 3)) / 6;
                // console.log(settaolnote);
                // settaolnote = settaolnote < 1 ? 1 : settaolnote;
                totalnote += settaolnote
            }
        }
        totalPrice = totalnote * 2 * LotteryObj.multiple;
        data = {
            totalnote: totalnote,
            totalPrice: totalPrice
        }
        return data;
    }

    //五星组选组选30
    FiveStartGroupthirty() {
        // 改
        let LotteryObj = this.CurrentObj;
        let wanArray = LotteryObj.data[0];
        let thousandArray = LotteryObj.data[1];
        let [setArray, settaolnote, totalnote, totalPrice, data] = [[], 0, 0];
        for (let i = 0; i < thousandArray.length; i++) {
            if ((wanArray).indexOf(thousandArray[i]) == -1) {
                let lotnumber = 0;
                lotnumber = wanArray.length;
                settaolnote = ((lotnumber) * (lotnumber - 1)) / 2;
                // settaolnote = settaolnote < 1 ? 1 : settaolnote;
                totalnote += settaolnote

            } else {
                let lotnumbers = 0;
                lotnumbers = wanArray.length - 1;
                // console.log(lotnumbers);
                settaolnote = ((wanArray.length - 1) * (wanArray.length - 2)) / 2;
                // console.log(settaolnote);
                // settaolnote = settaolnote < 1 ? 1 : settaolnote;
                totalnote += settaolnote
            }
        }
        totalPrice = totalnote * 2 * LotteryObj.multiple;
        data = {
            totalnote: totalnote,
            totalPrice: totalPrice
        }
        return data;
    }

    //五星组选组选20
    FiveStartGrouptwenty() {
        // 改
        let LotteryObj = this.CurrentObj;
        let wanArray = LotteryObj.data[0];
        let thousandArray = LotteryObj.data[1];
        let [setArray, settaolnote, totalnote, totalPrice, data] = [[], 0, 0];
        for (let i = 0; i < wanArray.length; i++) {
            if ((thousandArray).indexOf(wanArray[i]) == -1) {
                let lotnumber = 0;
                lotnumber = thousandArray.length;
                settaolnote = ((thousandArray.length) * (thousandArray.length - 1)) / 2;
                // settaolnote = settaolnote < 1 ? 1 : settaolnote;
                totalnote += settaolnote

            } else {
                let lotnumbers = 0;
                lotnumbers = thousandArray.length - 1;
                // console.log(lotnumbers);
                settaolnote = ((thousandArray.length - 1) * (thousandArray.length - 2)) / 2;
                // console.log(settaolnote);
                // settaolnote = settaolnote < 1 ? 1 : settaolnote;
                totalnote += settaolnote
            }
        }
        totalPrice = totalnote * 2 * LotteryObj.multiple;
        data = {
            totalnote: totalnote,
            totalPrice: totalPrice
        }
        return data;
    }

    //五星组选组选10
    FiveStartGroupTen() {
        // 改
        let LotteryObj = this.CurrentObj;
        let wanArray = LotteryObj.data[0];
        let thousandArray = LotteryObj.data[1];
        let [setArray, settaolnote, totalnote, totalPrice, data] = [[], 0, 0];
        for (let i = 0; i < wanArray.length; i++) {
            if ((thousandArray).indexOf(wanArray[i]) == -1) {
                let lotnumber = 0;
                lotnumber = thousandArray.length;
                // console.log(lotnumber);
                settaolnote = lotnumber;
                totalnote += settaolnote

            } else {
                let lotnumbers = 0;
                lotnumbers = thousandArray.length - 1;
                settaolnote = lotnumbers;
                totalnote += settaolnote
            }
        }
        totalPrice = totalnote * 2 * LotteryObj.multiple;
        data = {
            totalnote: totalnote,
            totalPrice: totalPrice
        }
        return data;

    }


    //五星组选组选5
    FiveStartGroupFive() {
        // 改
        let LotteryObj = this.CurrentObj;
        let [setArray, settaolnote, totalnote, totalPrice, data] = [[], 0, 0];
        let wanArray = LotteryObj.data[0];
        let thousandArray = LotteryObj.data[1];

        for (let i = 0; i < thousandArray.length; i++) {
            // wanArray
            if ((wanArray).indexOf(thousandArray[i]) == -1) {
                let lotnumber = 0;
                lotnumber = wanArray.length;
                // console.log(lotnumber);
                settaolnote = lotnumber;
                totalnote += settaolnote

            } else {
                let lotnumbers = 0;
                lotnumbers = wanArray.length - 1;
                settaolnote = lotnumbers;
                totalnote += settaolnote
            }
        }
        totalPrice = totalnote * 2 * LotteryObj.multiple;
        data = {
            totalnote: totalnote,
            totalPrice: totalPrice
        }
        return data;


    }




    // 大小单双（前二后二）
    PrevTwoSingleDobule() {

        let LotteryObj = this.CurrentObj;
        let number = LotteryObj.data;
        let totalnote = number[0].length * number[1].length
        let totalPrice = totalnote * LotteryObj.multiple * 2;
        let data = {
            totalnote: totalnote,
            totalPrice: totalPrice
        }
        return data;
    }

    // 大小单双（前三后三）
    PrevThreeSingleDobule() {
        let LotteryObj = this.CurrentObj;
        let number = LotteryObj.data;
        let totalnote = number[0].length * number[1].length * number[2].length
        let totalPrice = totalnote * LotteryObj.multiple * 2;
        let data = {
            totalnote: totalnote,
            totalPrice: totalPrice
        }
        return data;
    }
}








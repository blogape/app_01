  export function formateDate(time = 3800) {
      let t, h, m, s, v;
      if ((time / 3600) >= 1) {
          // 暂时不写  业务需求目前没看到大于一个小时的
          h = time / 3600;
      } else if (time <= 0) {
          t = "00:00:00"
          return t;
      } else {
          h = "00"
          m = time / 60;
          v = m - parseInt(m);
          m = m < 10 ? '0' + Math.floor(m) : Math.floor(m);
          s = v * 60;
          s = s < 10 ? '0' + Math.round(s) : Math.round(s);
          t = h + ":" + m + ":" + s
          return t;
      }

  }
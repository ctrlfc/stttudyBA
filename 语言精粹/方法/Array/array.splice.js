// splice(start,deleteCount,item)

// splice方法从array中移除一或多个元素,并用新的item替换它们

// 参数start是从数组array 中移除元素的开始位置

// 参数deleteCount是要移除的元素个数

// 如果有额外参数 ,那些item会插入到被移除元素的位置上.它返回一个包含被移除元素的数组

var a = ["a", "b", "c"];
var r = a.splice(1, 1, "abcd", "bug");

// 移除后 把item加上空位

// splice实现

Array.method("splice", function(start, deleteCount) {
    var max = Math.max,
        min = Math.min,
        delta,
        element,
        insertCount = max(arguments.length - 2, 0),
        k = 0,
        len = this.length,
        new_len,
        result = [],
        shift_count;

    start = start || 0;
    if (start < 0) {
        start += len;
    }
    start = max(min(start, len), 0);
    deleteCount = max(
        min(typeof deleteCount === "number" ? deleteCount : len, len - start),
        0
    );
    delta = insertCount - deleteCount;
    new_len = len + delta;
    while (k < deleteCount) {
        element = this(start + k);
        if (element !== undefined) {
            result[k] = element;
        }
        k += 1;
    }
    shift_count = len - start - deleteCount;
    if (delta < 0) {
        k = start + insertCount;
        while (shift_count) {
            this[k] = this[k - delta];
            k += 1;
            shift_count -= 1;
        }
        this.length = new_len;
    } else if (delta > 0) {
        k = 1;
        while (shift_count) {
            this[new_len - k] = this[len - k];
            k += 1;
            shift_count -= 1;
        }
        this.length = new_len;
    }
    for (k = 0; k < insertCount; k += 1) {
        this[start + k] = arguments[k + 2];
    }
    return result;
});

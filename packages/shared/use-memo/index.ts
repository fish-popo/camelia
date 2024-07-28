/*
 * @Date: 2024-07-28 13:59:03
 * @Description: Modify here please
 */
import * as React from "react";

interface Cache<Value, Condition> {
  condition?: Condition;
  value?: Value;
}

export function useMemo<Value, Condition = any[]>(getValue: () => Value, condition: Condition, shouldUpdate: (prev: Condition, next: Condition) => boolean) {
  const cacheRef = React.useRef<Cache<Value, Condition>>({});

  if (!("value" in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
    cacheRef.current.value = getValue();
    cacheRef.current.condition = condition;
  }

  return cacheRef.current.value;
}

## CSS 선택자

선택자는 CSS에서 **`꾸밀 대상`**  즉, `속성을 줄 대상`을 뜻합니다.

1. **`****`** : 전체 선택자
2. **`tag`** : 태그 선택자
3. **`.class`** : 클래스선택자
4. **`#id`** : 아이디선택자
5. **`선택자:가상상황`** : 가상선택자
```
<!-- CSS 기본 선택자 -->
<style>
    * {
        color: red;
        }

    tag {
        color: red;
        }

    .class {
        color: red;
        }

    #id {
        color: red;
        }

    선택자:가상상황 {
        background-color: red;
        }
</style>

```
### 레벨업!

> 선택자에는 tag ⇒ class ⇒ id 순으로 우선순위가 적용됩니다.

### 박스모델 화면 표시 방법

CSS 박스모델에는 content-box, border-box 가 있습니다.
>**`border-box`** : border가 고정되고 contents 크기가 변합니다. (박스가 고정)
**`content-box`** : contents가 고정되고 border의 크기가 변합니다. (박스가 커짐)

실무적용 - { border-box, content-box 각 각 } 언제 사용하나요?
> 실무에서는 박스 크기를 디자이너가 전달해준 화면과 일치시켜야 하기 때문에 바깥테두리(박스전체)를 고정시키는 border-box 사용을 권장합니다.
>

자주 사용되는 flex 속성들
>/* 부모박스 */
    display: flex;

>/* 행기준: row, 열기준: column */
    flex-direction: row;
    flex-direction: column;

>/* flex-direction 기준 수평 방향으로 자식박스 정렬 */
    justify-content: center;

>/* flex-direction 기준  수직 방향으로 자식박스 정렬 */
    align-items: center;

import React, {useState} from 'react';
import {FormattedMessage} from 'react-intl';

function CreateSurvey() {

    return (
        <div className="creater card">
            <div className="card-body">
                <h5>
                    <FormattedMessage
                        id = "app.creator.type"
                        defaultMessage="Select question type"
                    />
                </h5>
                <select className="form-control type m-auto" id="type">
                    <FormattedMessage id="app.creator.radio" defaultMessage="Radiobutton">
                        {(message) => <option value="app.creator.radio">{message}</option>}
                    </FormattedMessage>
                    <FormattedMessage id="app.creator.checkbox" defaultMessage="Checkbox">
                        {(message) => <option value="app.creator.checkbox">{message}</option>}
                    </FormattedMessage>
                </select>
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at blanditiis consectetur debitis deleniti deserunt dicta distinctio esse fuga id itaque laborum molestiae natus omnis pariatur perferendis, porro possimus provident quaerat, quibusdam repudiandae saepe sapiente sed ullam vel! Ab aut blanditiis culpa cum dolorum eum fugiat hic, ipsam ipsum maxime natus nemo nisi, nostrum officiis placeat quaerat quisquam quo rerum saepe tenetur? Autem delectus doloribus, excepturi exercitationem, facere facilis fugiat illo in ipsa laborum quibusdam quod reiciendis rerum soluta sunt tenetur vel veritatis, voluptatum. Animi expedita nemo quisquam! Architecto aspernatur commodi consequatur distinctio dolorem earum eligendi esse eum ex exercitationem id ipsam magni odit officia quibusdam recusandae, suscipit tempora, ullam? Accusamus aperiam assumenda at aut autem dignissimos dolore ducimus, ea earum facilis impedit, incidunt inventore iusto nam nesciunt nisi nobis pariatur perspiciatis quas, quisquam quos sint tempora velit veniam vero. Autem corporis cumque doloribus, expedita facere harum incidunt ipsa iste modi natus, optio pariatur quam qui sit temporibus vitae voluptas, voluptatem voluptatibus. Ad adipisci amet beatae cupiditate dicta harum id incidunt iste itaque labore magnam molestiae nemo officiis provident quae quod, similique sint suscipit voluptas voluptatem. Accusamus cupiditate deleniti distinctio doloremque doloribus, ducimus fugiat hic illum ipsum, magni minima placeat quo repellendus sequi, vero. Ad architecto consequatur deserunt distinctio eaque eius eos harum id minus modi molestiae mollitia nesciunt nihil obcaecati provident qui, quia repudiandae sapiente sint temporibus tenetur vero voluptate? Commodi consequatur dignissimos earum enim, excepturi maiores minima numquam porro, possimus quaerat quas reiciendis rem repellat saepe sunt temporibus vitae. A autem cupiditate doloribus, dolorum explicabo harum hic impedit labore laborum magni minima, natus neque non nulla odio officia praesentium vel? Cumque excepturi mollitia nobis rem sed. Ab ad aliquam animi autem deserunt dolor ea eius error et excepturi expedita harum incidunt iste itaque laborum molestias nihil numquam obcaecati officia omnis perferendis quisquam repellendus repudiandae sequi, temporibus tenetur totam ullam voluptate voluptatem voluptates! A amet assumenda fugiat mollitia odit perferendis saepe voluptatibus voluptatum! Ab assumenda blanditiis cumque eius et ipsum libero magni neque obcaecati praesentium. A ab animi assumenda autem blanditiis corporis cupiditate delectus eius eum eveniet fuga, hic incidunt iure nisi, nobis nostrum nulla numquam officiis optio, pariatur possimus quaerat sit unde vel voluptas? Consectetur delectus exercitationem in ipsam magni provident quae temporibus! Ab accusamus at, beatae deserunt in incidunt porro quod reiciendis reprehenderit? Alias, architecto atque blanditiis debitis dolorum facilis, inventore molestias perspiciatis quod rem tempore unde velit voluptatum! Ipsam laudantium quaerat tempora! Ab ad architecto asperiores deserunt eum, eveniet ex impedit in iusto laboriosam necessitatibus praesentium repellat ut? Alias aliquam atque, itaque laborum magni mollitia non officia possimus quod recusandae sint suscipit voluptas! Atque culpa debitis deleniti eaque in laboriosam odit quae! Aperiam aspernatur atque aut dignissimos nostrum quasi quod veritatis voluptatibus. A accusamus, amet delectus excepturi impedit, incidunt inventore ipsam magnam maiores modi molestias odit officia placeat quaerat quos rem repellat reprehenderit sequi sint ullam vel veniam veritatis voluptate voluptatem voluptates. Aperiam earum officiis placeat soluta vitae! Asperiores autem debitis iusto laborum officia unde voluptates!</div>
        </div>
    )
}
export default CreateSurvey;
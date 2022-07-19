import { FeedBackButton } from "./FeedBackButton";


export const FeedBackOptions =
    ({ options, onLeaveFeedback }) => {
    return (<div>
        <p>Please leave feedback</p>
        {
            options.map(option =>
            (<FeedBackButton
                type="button"
                onClick={() => onLeaveFeedback(option)}
                key={option}>{option}
            </FeedBackButton>)
            )
        }
        </div>
        
    )
};
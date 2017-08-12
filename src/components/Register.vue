<template>
    <div class="ui segment">
    
        <div class="ui center aligned basic segment">
            <h3>Register</h3>
        </div>
    
        <form class="ui form">
    
            <div class="field">
                <div class="two fields">
    
                    <div class="field">
                        <div class="ui left icon input">
                            <input type="text" placeholder="name@example.com">
                            <i class="icon users"></i>
                        </div>
                    </div>
    
                    <div class="field">
                        <div class="ui left icon input">
                            <input type="password" placeholder="password">
                            <i class="icon unlock alternate"></i>
                        </div>
                    </div>
    
                </div>
            </div>
    
            <button class="fluid ui button" type="submit">Login</button>
    
        </form>
    
        <div class="ui horizontal divider"> Or </div>
    
        <div class="ui basic center aligned segment">
            <img class="google-button" src="/src/assets/images/google-signin.png" />
        </div>
        
    </div>
</template>

<script>
export default {
  
}
</script>

package com.example.uxj4alarma

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class ListActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_list)

        val btn_menu: Button = findViewById(R.id.btn_MenuListRecordatorio)
        btn_menu.setOnClickListener {
            val intent_menu_ppal = Intent(this@ListActivity, MainActivity::class.java)
            startActivity(intent_menu_ppal)
        }
    }
}